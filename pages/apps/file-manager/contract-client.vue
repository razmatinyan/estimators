<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="contract px-4 mx-auto">
      <div class="topState">
        <span>State of </span>
        <select v-model="contract.state">
          <option
            v-for="(state, key) in states"
            :key="key"
            :value="key"
            :disabled="key == 'none'"
            >{{ state }}</option
          >
        </select>
      </div>
      <p class="heading text-center font-extrabold mt-1">
        CONTRACT
      </p>
      <hr class="mb-4 border-black" style="margin-top: 2px" />
      <div class="body mb-3">
        <span class="indent">
          <span>This Contract (this "Agreement") is made as of this</span>
          <v-date-picker mode="date" v-model="contract.date">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="date-picker text-center"
                :value="inputValue"
                v-on="inputEvents"
              /> </template
          ></v-date-picker>
          <span>
            by and between
            <span class="underline font-bold"
              >&nbsp;{{ getFullName }}&nbsp;</span
            >
            located at
            <span class="underline font-bold"
              >&nbsp;{{ getFullAddress }}&nbsp;</span
            >
            (“Client”) and
          </span>
          <span class="underline font-bold">AV Promotions</span>
          <span class="mr-2">located at </span
          ><span class="underline font-bold"
            >22025 Ventura Blvd # 300 Woodland Hills, CA 91364 United
            States</span
          >
          <!-- <select v-model="contract.contractor.profession">
            <option
              v-for="(profession, index) in professions"
              :key="index"
              :value="profession"
              :disabled="index === 0"
              :selected="index === 0"
              >{{ profession }}</option
            >
          </select> -->
          <Multiselect
            v-model="contract.contractor.profession"
            :options="professions"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="true"
            :placeholder="null"
            label="name"
            track-by="name"
          >
            <template slot="selection" slot-scope="{ values }">
              <span class="multiselect__single" v-if="!values.length">
                Select your profession(s)
              </span></template
            >
          </Multiselect>
          (“Independent Contractor”). Client and Independent Contractor may each
          be referred to in this Agreement as a “Party” and collectively as the
          “Parties.”
        </span>
        <ol class="list-decimal list-inside puncts mt-2">
          <li>
            <span>
              <b>Services.</b>
              Independent Contractor shall provide the following services to
              Client (the “Services”):
              <span
                :contenteditable="true"
                class="outline-none underline ml-1"
                style="width: 300px; height: 25px"
                spellcheck="false"
                v-html="contract.otherText"
                @input="handleOther($event, contract, 'services')"
              />. In addition, Independent Contractor shall perform such other
              duties and tasks, or changes to the Services, as may be agreed
              upon by the Parties.
            </span>
          </li>
          <li>
            <span>
              <b>Compensation.</b>
              Inconsideration for Independent Contractor’s performance of the
              Services, Client shall pay Independent Contractor: (Check one)
            </span>
            <span class="mr-3 mt-2 custom-control custom-checkbox">
              <input
                type="radio"
                id="Fixed_Wage"
                class="custom-control-input"
                v-model="contract.compensation.type"
                value="fixedWage"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.compensation.type === 'fixedWage'
                }"
                for="Fixed_Wage"
                ><b>A Fixed Wage.</b> Client shall pay Independent Contractor
                <CurrencyInput
                  :currency="contract.compensation.fixedWage.currency"
                  :price="contract.compensation.fixedWage.price"
                  @changeCurrency="
                    changeCurrency(
                      $event,
                      contract.compensation.fixedWage,
                      'currency'
                    )
                  "
                  @changePrice="
                    changeCurrency(
                      $event,
                      contract.compensation.fixedWage,
                      'price'
                    )
                  "
                /><span
                  class="mr-1 custom-control custom-checkbox"
                  style="display: inline-block !important"
                  v-for="type in types"
                  :key="type"
                  ><input
                    type="radio"
                    class="custom-control-input"
                    :id="type + 'fixedWage'"
                    :value="type"
                    v-model="contract.compensation.fixedWage.type"
                  /><label
                    :for="type + 'fixedWage'"
                    class="custom-control-label"
                    :class="{
                      selected: contract.compensation.fixedWage.type === type
                    }"
                  >
                    per {{ type }}
                  </label></span
                ><span
                  class="custom-control custom-checkbox"
                  style="display: inline-block !important"
                  ><input
                    type="radio"
                    class="custom-control-input"
                    id="otherfixedWage"
                    value="other"
                    v-model="contract.compensation.fixedWage.type"/><label
                    for="otherfixedWage"
                    class="custom-control-label"
                    :class="{
                      selected: contract.compensation.fixedWage.type === 'other'
                    }"
                    >other:
                    <input
                      type="text"
                      placeholder="type"
                      class="w150"
                      v-model="
                        contract.compensation.fixedWage.other
                      "/></label></span
                >. Independent Contractor will be paid: (Check one)
              </label>
            </span>
            <div class="ml-3 mt-2">
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="weeklypaidType"
                  value="weekly"
                  v-model="contract.compensation.fixedWage.paidType"
                />
                <label
                  for="weeklypaidType"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.fixedWage.paidType === 'weekly'
                  }"
                >
                  Weekly. Independent Contractor will be paid on
                  <input
                    type="text"
                    class="w50 text-center"
                    placeholder="1"
                    v-model="contract.compensation.fixedWage.weeklyDay"
                  />
                  [Day of the week] of every week.
                </label>
              </div>
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="monthlypaidType"
                  value="monthly"
                  v-model="contract.compensation.fixedWage.paidType"
                />
                <label
                  for="monthlypaidType"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.fixedWage.paidType === 'monthly'
                  }"
                >
                  Monthly. Independent Contractor will be paid on the
                  <input
                    type="text"
                    class="w50 text-center"
                    placeholder="1"
                    v-model="contract.compensation.fixedWage.monthlyDay"
                  />
                  [Day of the month] of every month.
                </label>
              </div>
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="invoicepaidType"
                  value="invoice"
                  v-model="contract.compensation.fixedWage.paidType"
                />
                <label
                  for="invoicepaidType"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.fixedWage.paidType === 'invoice'
                  }"
                >
                  After Independent Contractor sends Client an invoice.
                  Independent Contractor will be paid within
                  <input
                    type="text"
                    class="w50 text-center"
                    placeholder="1"
                    v-model="contract.compensation.fixedWage.invoice.within"
                  />
                  days after receiving Independent Contractor’s invoice.
                  Independent Contractor will submit invoices for payment
                  <span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="weekpaymentTime"
                      value="week"
                      v-model="
                        contract.compensation.fixedWage.invoice.paymentTime
                      "
                    />
                    <label
                      for="weekpaymentTime"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.fixedWage.invoice
                            .paymentTime === 'week'
                      }"
                    >
                      at the end of every week
                    </label>
                  </span>
                  <span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="monthpaymentTime"
                      value="month"
                      v-model="
                        contract.compensation.fixedWage.invoice.paymentTime
                      "
                    />
                    <label
                      for="monthpaymentTime"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.fixedWage.invoice
                            .paymentTime === 'month'
                      }"
                    >
                      on the
                      <input
                        type="text"
                        v-model="
                          contract.compensation.fixedWage.invoice.monthDay
                        "
                        class="w50 text-center"
                        placeholder="8"
                      />
                      [Day of the month] of every month</label
                    ></span
                  ><span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="afterpaymentTime"
                      value="after"
                      v-model="
                        contract.compensation.fixedWage.invoice.paymentTime
                      "
                    />
                    <label
                      for="afterpaymentTime"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.fixedWage.invoice
                            .paymentTime === 'after'
                      }"
                      >within
                      <input
                        type="text"
                        v-model="contract.compensation.fixedWage.invoice.after"
                        class="w50 text-center"
                        placeholder="8"
                      />
                      days after completion of the services
                    </label>
                  </span>
                </label>
              </div>
              <div
                class="mt-1 custom-control custom-checkbox thirdPunct items-end"
                style="display: flex !important"
              >
                <input
                  type="radio"
                  class="custom-control-input"
                  id="otherpaidType"
                  value="other"
                  v-model="contract.compensation.fixedWage.paidType"
                />
                <label
                  for="otherpaidType"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.fixedWage.paidType === 'other'
                  }"
                  >Other:
                </label>
                <span
                  :contenteditable="true"
                  class="outline-none underline ml-1"
                  style="width: 300px; height: 25px"
                  spellcheck="false"
                  v-html="contract.compensation.fixedWage.otherText"
                  @input="
                    handleOther(
                      $event,
                      contract.compensation.fixedWage,
                      'otherPaidType'
                    )
                  "
                />
              </div>
            </div>

            <span class="mr-3 mt-2 custom-control custom-checkbox">
              <input
                type="radio"
                id="Set_Fee"
                class="custom-control-input"
                v-model="contract.compensation.type"
                value="setFee"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.compensation.type === 'setFee'
                }"
                for="Set_Fee"
                ><b>A Set Fee.</b> Client shall pay Independent Contractor
                <CurrencyInput
                  :currency="contract.compensation.setFee.currency"
                  :price="contract.compensation.setFee.price"
                  @changeCurrency="
                    changeCurrency(
                      $event,
                      contract.compensation.setFee,
                      'currency'
                    )
                  "
                  @changePrice="
                    changeCurrency(
                      $event,
                      contract.compensation.setFee,
                      'price'
                    )
                  "
                />: (Check one)
              </label>
            </span>

            <div class="ml-3 mt-2">
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="weeklypaidTypeSetFee"
                  value="afterComplete"
                  v-model="contract.compensation.setFee.paidType"
                />
                <label
                  for="weeklypaidTypeSetFee"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.setFee.paidType === 'afterComplete'
                  }"
                >
                  After Independent Contractor completes the Services.
                </label>
              </div>
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="afterInvoicepaidType"
                  value="afterInvoice"
                  v-model="contract.compensation.setFee.paidType"
                />
                <label
                  for="afterInvoicepaidType"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.setFee.paidType === 'afterInvoice'
                  }"
                >
                  After Independent Contractor sends Client an invoice. Client
                  shall pay Independent Contractor within
                  <input
                    type="text"
                    class="w50 text-center"
                    placeholder="1"
                    v-model="contract.compensation.setFee.independentWithin"
                  />
                  days after receiving Independent Contractor’s invoice.
                  Independent Contractor will submit invoices for payment
                  <span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="invoiceweekpaymentTime"
                      value="week"
                      v-model="contract.compensation.setFee.independentType"
                    />
                    <label
                      for="invoiceweekpaymentTime"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.setFee.independentType ===
                          'week'
                      }"
                    >
                      at the end of every week</label
                    ></span
                  ><span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="invoicemonthpaymentTime"
                      value="month"
                      v-model="contract.compensation.setFee.independentType"
                    />
                    <label
                      for="invoicemonthpaymentTime"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.setFee.independentType ===
                          'month'
                      }"
                    >
                      on the
                      <input
                        type="text"
                        class="w50 text-center"
                        placeholder="1"
                        v-model="contract.compensation.setFee.monthDay"
                      />
                      [Day of the month] of every month
                    </label>
                  </span>
                  <span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="invoiceafterpaymentTime"
                      value="after"
                      v-model="contract.compensation.setFee.independentType"
                    />
                    <label
                      for="invoiceafterpaymentTime"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.setFee.independentType ===
                          'after'
                      }"
                    >
                      within
                      <input
                        type="text"
                        class="w50 text-center"
                        placeholder="1"
                        v-model="contract.compensation.setFee.after"
                      />
                      days after completion of the services.
                    </label>
                  </span>
                </label>
              </div>
              <div
                class="mt-1 custom-control custom-checkbox thirdPunct items-end"
                style="display: flex !important"
              >
                <input
                  type="radio"
                  class="custom-control-input"
                  id="othersetFeeType"
                  value="other"
                  v-model="contract.compensation.setFee.paidType"
                />
                <label
                  for="othersetFeeType"
                  class="custom-control-label"
                  :class="{
                    selected: contract.compensation.setFee.paidType === 'other'
                  }"
                  >Other:
                </label>
                <span
                  :contenteditable="true"
                  class="outline-none underline ml-1"
                  style="width: 300px; height: 25px"
                  spellcheck="false"
                  v-html="contract.compensation.setFee.otherText"
                  @input="
                    handleOther(
                      $event,
                      contract.compensation.setFee,
                      'otherPaidType'
                    )
                  "
                />
              </div>
            </div>

            <span class="mr-3 mt-2 custom-control custom-checkbox">
              <input
                type="radio"
                id="Milestones"
                class="custom-control-input"
                v-model="contract.compensation.type"
                value="afterMilestones"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.compensation.type === 'afterMilestones'
                }"
                for="Milestones"
                ><b>After Completing Certain Milestones.</b> Client shall pay
                Independent Contractor according to the following schedule:
              </label>
              <ol class="ml-3" style="list-style-type: dec;">
                <li
                  v-for="milestone in contract.compensation.afterMilestones
                    .milestones"
                  :key="milestone.id"
                >
                  <span class="flex flex-wrap">
                    <CurrencyInput
                      :currency="milestone.currency"
                      :price="milestone.price"
                      @changeCurrency="
                        changeCurrency($event, milestone, 'currency')
                      "
                      @changePrice="changeCurrency($event, milestone, 'price')"
                    />
                    for milestone.
                    <span
                      v-show="
                        contract.compensation.afterMilestones.milestones
                          .length !== 1
                      "
                      class="ml-2 rounded-full w-6 h-6 cursor-pointer flex justify-center items-center text-center"
                      style="border: 1px solid black;"
                      @click="deleteMilestone(milestone.id)"
                      >&times;</span
                    >
                  </span>
                </li>
              </ol>
              <div class="flex">
                <span class="flex cursor-pointer" @click="newMilestone">
                  <span
                    style="border: 1px solid black;"
                    class=" mr-1 rounded-full w-6 h-6 flex justify-center items-center text-center"
                    >+</span
                  >
                  <span>
                    Add milestone
                  </span>
                </span>
              </div>
              Independent Contractor will be paid: (Check one)
            </span>

            <div class="ml-3 mt-2">
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="weeklypaidTypeMilestones"
                  value="afterComplete"
                  v-model="contract.compensation.afterMilestones.paidType"
                />
                <label
                  for="weeklypaidTypeMilestones"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.afterMilestones.paidType ===
                      'afterComplete'
                  }"
                >
                  After the completion of each milestone.
                </label>
              </div>
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="afterInvoicepaidTypeMilestone"
                  value="afterInvoice"
                  v-model="contract.compensation.afterMilestones.paidType"
                />
                <label
                  for="afterInvoicepaidTypeMilestone"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.afterMilestones.paidType ===
                      'afterInvoice'
                  }"
                >
                  After Independent Contractor sends Client an invoice. Client
                  shall pay Independent Contractor within
                  <input
                    type="text"
                    class="w50 text-center"
                    placeholder="1"
                    v-model="
                      contract.compensation.afterMilestones.independentWithin
                    "
                  />
                  days after receiving Independent Contractor’s invoice.
                  Independent Contractor will submit invoices for payment
                  <span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="invoiceweekpaymentTimeMilestone"
                      value="week"
                      v-model="
                        contract.compensation.afterMilestones.independentType
                      "
                    />
                    <label
                      for="invoiceweekpaymentTimeMilestone"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.afterMilestones
                            .independentType === 'week'
                      }"
                    >
                      at the end of every week</label
                    ></span
                  ><span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="invoicemonthpaymentTimeMilestone"
                      value="month"
                      v-model="
                        contract.compensation.afterMilestones.independentType
                      "
                    />
                    <label
                      for="invoicemonthpaymentTimeMilestone"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.afterMilestones
                            .independentType === 'month'
                      }"
                    >
                      on the
                      <input
                        type="text"
                        class="w50 text-center"
                        placeholder="1"
                        v-model="contract.compensation.afterMilestones.monthDay"
                      />
                      [Day of the month] of every month
                    </label>
                  </span>
                  <span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="invoiceafterpaymentTimeMilestone"
                      value="after"
                      v-model="
                        contract.compensation.afterMilestones.independentType
                      "
                    />
                    <label
                      for="invoiceafterpaymentTimeMilestone"
                      class="custom-control-label"
                      :class="{
                        selected:
                          contract.compensation.afterMilestones
                            .independentType === 'after'
                      }"
                    >
                      within
                      <input
                        type="text"
                        class="w50 text-center"
                        placeholder="1"
                        v-model="contract.compensation.afterMilestones.after"
                      />
                      days after completion of the services.
                    </label>
                  </span>
                </label>
              </div>
              <div
                class="mt-1 custom-control custom-checkbox thirdPunct items-end"
                style="display: flex !important"
              >
                <input
                  type="radio"
                  class="custom-control-input"
                  id="otherafterMilestonesType"
                  value="other"
                  v-model="contract.compensation.afterMilestones.paidType"
                />
                <label
                  for="otherafterMilestonesType"
                  class="custom-control-label"
                  :class="{
                    selected:
                      contract.compensation.afterMilestones.paidType === 'other'
                  }"
                  >Other:
                </label>
                <span
                  :contenteditable="true"
                  class="outline-none underline ml-1"
                  style="width: 300px; height: 25px"
                  spellcheck="false"
                  v-html="contract.compensation.afterMilestones.otherText"
                  @input="
                    handleOther(
                      $event,
                      contract.compensation.afterMilestones,
                      'otherPaidType'
                    )
                  "
                />
              </div>
            </div>

            <span class="mr-3 mt-2 custom-control custom-checkbox">
              <input
                type="radio"
                id="other"
                class="custom-control-input"
                v-model="contract.compensation.type"
                value="other"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.compensation.type === 'other'
                }"
                for="other"
                ><b>Other.</b>
              </label>
              <span
                :contenteditable="true"
                class="outline-none underline inline-block ml-1"
                style="width: 300px; height: 25px; margin-top: 5px;"
                spellcheck="false"
                v-html="contract.compensation.otherText"
                @input="handleOther($event, contract.compensation, 'other')"
              />
            </span>
          </li>

          <li>
            <span> <b>Expenses.</b> (Check one) </span>
            <span class="mr-3 mt-2 custom-control custom-checkbox">
              <input
                type="radio"
                id="reimburse"
                class="custom-control-input"
                v-model="contract.expenses"
                value="reimburse"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.expenses === 'reimburse'
                }"
                for="reimburse"
                >Client shall reimburse Independent Contractor for expenses.
                Except as otherwise specified in this Agreement, Client shall
                reimburse Independent Contractor for all pre-approved,
                reasonable and necessary costs and expenses incurred in
                connection with the performance of the Services.
              </label>
            </span>
            <span class="mr-3 mt-2 custom-control custom-checkbox">
              <input
                type="radio"
                id="notReimburse"
                class="custom-control-input"
                v-model="contract.expenses"
                value="notReimburse"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.expenses === 'notReimburse'
                }"
                for="notReimburse"
                >Client shall <b class="underline">NOT</b> reimburse Independent
                Contractor for expenses. All costs and expenses incurred by
                Independent Contractor in connection with the performance of the
                Services shall be the sole responsibility of and paid by
                Independent Contractor.
              </label>
            </span>
          </li>

          <li>
            <span>
              <b>Term and Termination.</b> Independent Contractor’s engagement
              with Client under this Agreement shall commence on
              <v-date-picker mode="date" v-model="contract.term.date">
                <template v-slot="{ inputValue, inputEvents }">
                  <input
                    class="date-picker text-center"
                    :value="inputValue"
                    v-on="inputEvents"
                  /> </template></v-date-picker
              >. The Parties agree and acknowledge that this Agreement and
              Independent Contractor’s engagement with Client under this
              Agreement shall terminate: (Check one)
            </span>
            <div class="ml-3">
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  id="termUpon"
                  class="custom-control-input"
                  v-model="contract.term.termin"
                  value="upon"
                />
                <label
                  class="custom-control-label"
                  :class="{
                    selected: contract.term.termin === 'upon'
                  }"
                  for="termUpon"
                  >Upon the completion by Independent Contractor of the
                  Services.
                </label>
              </div>
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  id="termAfter"
                  class="custom-control-input"
                  v-model="contract.term.termin"
                  value="after"
                />
                <label
                  class="custom-control-label"
                  :class="{
                    selected: contract.term.termin === 'after'
                  }"
                  for="termAfter"
                  >After
                  <input
                    type="text"
                    class="w50 text-center"
                    placeholder="1"
                    v-model="contract.term.afterDay"
                  />
                  <span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="terminMonth"
                      value="month"
                      v-model="contract.term.afterType"
                    />
                    <label
                      for="terminMonth"
                      class="custom-control-label"
                      :class="{
                        selected: contract.term.afterType === 'month'
                      }"
                    >
                      months
                    </label> </span
                  ><span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="termday"
                      value="day"
                      v-model="contract.term.afterType"
                    />
                    <label
                      for="termday"
                      class="custom-control-label"
                      :class="{
                        selected: contract.term.afterType === 'day'
                      }"
                    >
                      days
                    </label> </span
                  ><span
                    class="mr-1 custom-control custom-checkbox"
                    style="display: inline-block !important"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="termother"
                      value="other"
                      v-model="contract.term.afterType"
                    />
                    <label
                      for="termother"
                      class="custom-control-label"
                      :class="{
                        selected: contract.term.afterType === 'other'
                      }"
                    >
                      other
                    </label>
                  </span> </label
                ><span
                  :contenteditable="true"
                  class="outline-none underline inline-block ml-1"
                  style="width: 300px; height: 25px; margin-top: 5px;"
                  spellcheck="false"
                  v-html="contract.term.otherText"
                  @input="handleOther($event, contract.term, 'other')"
                />
              </div>
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="radio"
                  id="termOnDate"
                  class="custom-control-input"
                  v-model="contract.term.termin"
                  value="onDate"
                />
                <label
                  class="custom-control-label"
                  :class="{
                    selected: contract.term.termin === 'onDate'
                  }"
                  for="termOnDate"
                  >On
                  <v-date-picker mode="date" v-model="contract.term.onDate">
                    <template v-slot="{ inputValue, inputEvents }">
                      <input
                        class="date-picker text-center"
                        :value="inputValue"
                        v-on="inputEvents"
                      /> </template
                  ></v-date-picker>
                </label>
              </div>
            </div>
          </li>
          <li>
            <span>
              <b>Independent Contractor.</b> The Parties agree and acknowledge
              that Independent Contractor is an independent contractor and is
              not, for any purpose, an employee of Client. Independent
              Contractor does not have any authority to enter into agreements or
              contracts on behalf of Client, and shall not represent that it
              possesses any such authority. Independent Contractor shall not be
              entitled to any of Client’s benefits, including, but not limited
              to, coverage under medical, dental, retirement or other plans.
              Client shall not be obligated to pay worker's compensation
              insurance, unemployment compensation, social security tax,
              withholding tax or other taxes or withholdings for or on behalf of
              the Independent Contractor in connection with the performance of
              the Services under this Agreement. Nothing contained in this
              Agreement shall be deemed or construed by the Parties to create
              the relationship of a partnership, a joint venture or any other
              fiduciary relationship.
            </span>
          </li>
          <li>
            <span> <b>Confidentiality.</b> (Check one) </span>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="notExposed"
                class="custom-control-input"
                v-model="contract.confidentiality"
                value="notExposed"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.confidentiality === 'notExposed'
                }"
                for="notExposed"
                >Independent Contractor will <b class="underline">NOT</b> be
                exposed to confidential information.
              </label>
            </div>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="exposed"
                class="custom-control-input"
                v-model="contract.confidentiality"
                value="exposed"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.confidentiality === 'exposed'
                }"
                for="exposed"
                >Independent Contractor will be exposed to confidential
                information.
              </label>
              <ol style="list-style-type: lower-alpha;" class="ml-3">
                <li
                  v-for="(item, id) in contract.confidentialityList"
                  :key="id"
                >
                  <b>{{ item.title }}</b> {{ item.text }}
                </li>
              </ol>
            </div>
          </li>
          <li>
            <span>
              <b>Ownership of Work Product.</b> The Parties agree that all work
              product, information or other materials created and developed by
              Independent Contractor in connection with the performance of the
              Services under this Agreement and any resulting intellectual
              property rights (collectively, the “Work Product”) are the sole
              and exclusive property of: (Check one)
            </span>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="ownerClient"
                class="custom-control-input"
                v-model="contract.ownership"
                value="client"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.ownership === 'client'
                }"
                for="ownerClient"
                >Client. The Parties acknowledge that the Work Product shall, to
                the extent permitted by law, be considered a “work made for
                hire” within the definition of Section 101 of the Copyright Act
                of 1976, as amended, (the “Copyright Act”) and that Client is
                deemed to be the author and is the owner of all copyright and
                all other rights therein. If the work product is not deemed to
                be a “work made for hire” under the Copyright Act, then
                Independent Contractor hereby assigns to Client all of
                Independent Contractor’s rights, title and interest in and to
                the Work Product, including but not limited to all copyrights,
                publishing rights and rights to use, reproduce and otherwise
                exploit the Work Product in any and all formats, media, or all
                channels, whether now known or hereafter created.
              </label>
            </div>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="ownerContractor"
                class="custom-control-input"
                v-model="contract.ownership"
                value="contractor"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.ownership === 'contractor'
                }"
                for="ownerContractor"
                >Independent Contractor. Independent Contractor grants to Client
                a limited, non-exclusive license to use the Work Product. The
                Work Product is to be used only by Client, and Client may not
                assign, transfer, lease or sublicense any Work Product to any
                person or entity without Independent Contractor’s prior written
                consent.
              </label>
            </div>
          </li>
          <!-- 8 -->
          <li>
            <span> <b>Insurance.</b> (Check one) </span>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="maintain"
                class="custom-control-input"
                v-model="contract.insurance"
                value="maintain"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.insurance === 'maintain'
                }"
                for="maintain"
                >For the term of this Agreement, Independent Contractor shall
                obtain and maintain a policy of insurance, with appropriate and
                adequate coverage and limits, to cover any claims for bodily
                injury, property damage or other losses which might arise out of
                any negligent act or omission committed by Independent
                Contractor or Independent Contractor’s employees or agents, if
                any, in connection with the performance of the Services under
                this Agreement.
              </label>
            </div>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="notMaintain"
                class="custom-control-input"
                v-model="contract.insurance"
                value="notMaintain"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.insurance === 'notMaintain'
                }"
                for="notMaintain"
                >Independent Contractor is <b class="underline">NOT</b> required
                to maintain a policy of insurance.
              </label>
            </div>
          </li>

          <!-- 11 -->
          <li>
            <span>
              <b>Mutual Representations and Warranties.</b> Both Client and
              Independent Contractor represent and warrant that each Party has
              full power, authority and right to execute and deliver this
              Agreement, has full power and authority to perform its obligations
              under this Agreement, and has taken all necessary action to
              authorize the execution and delivery of this Agreement. No other
              consents are necessary to enter into or perform this
              Agreement.</span
            >
          </li>
          <!-- 12 -->
          <li>
            <span>
              <b>Independent Contractor Representation and Warranties.</b>
              Independent Contractor represents and warrants that it has all the
              necessary licenses, permits and registrations, if any, required to
              perform the Services under this Agreement in accordance with
              applicable federal, state and local laws, rules and regulations
              and that it will perform the Services according to the Client’s
              guidelines and specifications and with the standard of care
              prevailing in the industry.</span
            >
          </li>
          <!-- 13 -->
          <li>
            <span>
              <b>Indemnification.</b>
              (INITIAL if you want to include this clause. CROSS OUT if you do
              not.)</span
            >
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="checkbox"
                id="indemnification"
                class="custom-control-input"
                v-model="contract.indemnification"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.indemnification
                }"
                for="indemnification"
                >The Independent Contractor shall indemnify and hold harmless
                Client from any damages, claims, liabilities, loss and expenses,
                including reasonable attorney’s fees, arising out of any act or
                omission of Independent Contractor in performing the Services or
                the breach of any provision of this Agreement by Independent
                Contractor.
              </label>
            </div>
          </li>
          <!-- 14 -->
          <li>
            <span>
              <b>Governing Law.</b>
              The terms of this Agreement and the rights of the Parties hereto
              shall be governed exclusively by the laws of the State of
              <span class="underline">{{
                contract.state === 'none'
                  ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                  : states[contract.state]
              }}</span
              >, without regarding its conflicts of law provisions.</span
            >
          </li>
          <!-- 15 -->
          <li>
            <span>
              <b>Disputes.</b>
              Any dispute arising from this Agreement shall be resolved through:
              (Check one)</span
            >
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="courtLitigation"
                class="custom-control-input"
                v-model="contract.disputes.type"
                value="courtLitigation"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.disputes.type === 'courtLitigation'
                }"
                for="courtLitigation"
                >Court litigation. The dispute shall be resolved in the courts
                of the State of
                <span class="underline">{{
                  contract.state === 'none'
                    ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                    : states[contract.state]
                }}</span
                >.
              </label>
            </div>
            <div class="mt-3 ml-3">
              <p class="underline" style="padding-left: 43px;">
                Attorneys’ Fees
              </p>
              <div class="mt-1 custom-control custom-checkbox thirdPunct">
                <input
                  type="checkbox"
                  id="attrFee"
                  class="custom-control-input"
                  v-model="contract.disputes.attorneyFees"
                />
                <label
                  class="custom-control-label"
                  :class="{
                    selected: contract.disputes.attorneyFees
                  }"
                  for="attrFee"
                  >If either Party brings legal action to enforce its rights
                  under this Agreement, the prevailing party will be entitled to
                  recover from the other Party its expenses (including
                  reasonable attorneys' fees and costs) incurred in connection
                  with the action and any appeal.
                </label>
              </div>
            </div>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="arbitration"
                class="custom-control-input"
                v-model="contract.disputes.type"
                value="arbitration"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.disputes.type === 'arbitration'
                }"
                for="arbitration"
                >Arbitration. The dispute shall be resolved through binding
                arbitration conducted in accordance with the rules of the
                American Arbitration Association.
              </label>
            </div>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="mediation"
                class="custom-control-input"
                v-model="contract.disputes.type"
                value="mediation"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: contract.disputes.type === 'mediation'
                }"
                for="mediation"
                >Mediation. The dispute shall be resolved through mediation.
              </label>
            </div>
            <div class="mt-1 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="mediationThenArbitration"
                class="custom-control-input"
                v-model="contract.disputes.type"
                value="mediationThenArbitration"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected:
                    contract.disputes.type === 'mediationThenArbitration'
                }"
                for="mediationThenArbitration"
                >Mediation then arbitration. The dispute shall be resolved
                through mediation. If the dispute cannot be resolved through
                mediation, then the dispute will be resolved through binding
                arbitration conducted in accordance with the rules of the
                American Arbitration Association.
              </label>
            </div>
          </li>
          <!-- 16 - 23 -->
          <li v-for="(punct, id) in contract.punct16_23" :key="id">
            <span>
              <b>{{ punct.title }}</b> {{ punct.text }}</span
            >
          </li>
        </ol>
        <p>
          IN WITNESS WHEREOF, this Agreement has been executed and delivered as
          of the date first written above.
        </p>
        <div class="flex justify-around flex-wrap signs">
          <div class="flex mt-8">
            <div class="px-1 flex flex-col">
              <div
                class="relative"
                style="width: 260px; height: 170px;"
                @mousedown="currentSign = 'employeeSignature'"
              >
                <VueSignaturePad
                  width="260px"
                  height="170px"
                  class="border-b-4 border-black relative z-10"
                  ref="employeeSignature"
                  :options="{ ...options }"
                />
                <span
                  class="absolute top-0 right-0 text-black z-10 px-1 bg-gray-50 cursor-pointer"
                  @click="clear('employeeSignature')"
                  title="Clear signature"
                  >&times;</span
                >
              </div>
              <input
                type="text"
                class="w-full"
                placeholder="Contractor Name"
                v-model="contract.contractor.name"
              />
              <input
                type="text"
                class="w-full"
                placeholder="Company Name"
                v-model="contract.contractor.company"
              />
            </div>
            <span style="font-size: 12px" class="text-gray-800">CTRL+Z</span>
          </div>
          <div class="flex mt-8">
            <div class="px-1 flex flex-col">
              <div
                class="relative"
                style="width: 260px; height: 170px;"
                @mousedown="currentSign = 'employerSignature'"
              >
                <VueSignaturePad
                  width="260px"
                  height="170px"
                  class="border-b-4 border-black relative z-10"
                  ref="employerSignature"
                  :options="{ ...options }"
                />
                <span
                  class="absolute top-0 right-0 text-black z-10 px-1 bg-gray-50 cursor-pointer"
                  @click="clear('employerSignature')"
                  title="Clear signature"
                  >&times;</span
                >
              </div>
              <input
                type="text"
                class="w-full"
                placeholder="Client Name"
                v-model="contract.client.name"
              />
              <input
                type="text"
                class="w-full"
                placeholder="Company Name"
                v-model="contract.client.company"
              />
            </div>
            <span style="font-size: 12px" class="text-gray-800">CTRL+Z</span>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="btn text-white px-4"
            style="background-color: #841F3B !important; font-size: 20px"
            @click="saveContract"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import CurrencyInput from '~/components/widgets/CurrencyInput.vue'
import { mapGetters } from 'vuex'
import Multiselect from 'vue-multiselect'

function getZeroState(which) {
  if (which === 'fixedWage')
    return {
      currency: '$',
      price: '',
      type: '',
      other: '',
      paidType: '',
      weeklyDay: '',
      monthlyDay: '',
      invoice: {
        within: '',
        paymentTime: '',
        monthDay: '',
        after: ''
      },
      otherPaidType: '',
      otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }
  if (which === 'setFee')
    return {
      currency: '$',
      price: '',
      pay: '',
      paidType: '',
      independentWithin: '',
      independentType: '',
      monthDay: '',
      after: '',
      otherPaidType: '',
      otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }

  if (which === 'afterMilestones')
    return {
      milestones: [
        {
          currency: '$',
          price: '',
          id: 1
        }
      ],
      milestonesCount: 1,
      paidType: '',
      independentWithin: '',
      independentType: '',
      monthDay: '',
      after: '',
      otherPaidType: '',
      otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }

  if (which === 'other') return ''
}

export default {
  middleware: 'client',
  data() {
    return {
      currentSign: null,
      options: {
        penColor: '#000',
        backgroundColor: 'rgba(255,255,255)'
      },
      title: 'Contract',
      items: [
        // {
        //   text: 'Estimators',
        //   href: '/'
        // },
        // {
        //   text: 'Apps',
        //   href: '/'
        // },
        {
          text: 'File Manager',
          to: '/apps/file-manager'
        },
        {
          text: 'Contract',
          active: true
        }
      ],
      contract: {
        state: 'none',
        date: new Date(),
        services: '',
        client: {
          name: '',
          company: ''
        },
        otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        contractor: {
          name: '',
          address: '',
          company: '',
          profession: []
        },
        compensation: {
          type: '',
          fixedWage: getZeroState('fixedWage'),
          setFee: getZeroState('setFee'),
          afterMilestones: getZeroState('afterMilestones'),
          other: getZeroState('other'),
          otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        },
        expenses: '',
        term: {
          date: new Date(),
          termin: '',
          afterDay: '',
          afterType: '',
          other: '',
          otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
          onDate: new Date()
        },
        confidentiality: '',
        confidentialityList: [
          {
            title: 'Confidential and Proprietary Information.',
            text:
              'In the course of performing the Services, Independent Contractor will be exposed to confidential and proprietary information of Client. “Confidential Information” shall mean any data or information that is competitively sensitive material and not generally known to the public, including, but not limited to, information relating to development and plans, marketing strategies, finance, operations, systems, proprietary concepts, documentation, reports, data, specifications, computer software, source code, object code, flow charts, data, databases, inventions, know-how, trade secrets, customer lists, customer relationships, customer profiles, supplier lists, supplier relationships, supplier profiles, pricing, sales estimates, business plans and internal performance results relating to the past, present or future business activities, technical information, designs, processes, procedures, formulas or improvements, which Client considers confidential and proprietary. Independent Contractor acknowledges and agrees that the Confidential Information is valuable property of Client, developed over a long period of time at substantial expense and that it is worthy of protection.'
          },
          {
            title: 'Confidentiality Obligations.',
            text:
              'Except as otherwise expressly permitted in this Agreement, Independent Contractor shall not disclose or use in any manner, directly or indirectly, any Confidential Information either during the term of this Agreement or at any time thereafter, except as required to perform the Services or with Client’s prior written consent.'
          },
          {
            title: 'Rights in Confidential Information.',
            text:
              'All Confidential Information disclosed to Independent Contractor by Client (i) is and shall remain the sole and exclusive property of Client, and (ii) is disclosed or permitted to be acquired by Independent Contractor solely in reliance on Independent Contractor’s agreement to maintain the Confidential Information in confidence and not to use or disclose the Confidential Information to any other person. Except as expressly provided herein, this Agreement does not confer any right, license, ownership or other interest in or title to the Confidential Information to Independent Contractor.'
          },
          {
            title: 'Irreparable Harm.',
            text:
              'Independent Contractor acknowledges that use or disclosure of any Confidential Information in a manner inconsistent with this Agreement will give rise to irreparable injury for which damages would not be an adequate remedy. Accordingly, in addition to any other legal remedies which may be available at law or in equity, Client shall be entitled to equitable or injunctive relief against the unauthorized use or disclosure of Confidential Information. Client shall be entitled to pursue any other legally permissible remedy available as a result of such breach, including but not limited to, damages, both direct and consequential. In any action brought by Client under this Section, Client shall be entitled to recover its attorney’s fees and costs from Independent Contractor.'
          }
        ],
        ownership: '',
        insurance: '',
        indemnification: false,
        disputes: {
          type: '',
          attorneyFees: false
        },
        punct16_23: [
          {
            title: 'Binding Effect.',
            text:
              'This Agreement shall be binding upon and inure to the benefit of the Parties and their respective successors and permitted assigns.'
          },
          {
            title: 'Assignment.',
            text:
              'The interests of Independent Contractor are personal to Independent Contractor and cannot be assigned, transferred or sold without the prior written consent of Client.'
          },
          {
            title: 'Entire Agreement.',
            text:
              'This Agreement constitutes the entire agreement between the Parties hereto with respect the subject matter hereof, and supersedes all prior negotiations, understandings and agreements of the Parties.'
          },
          {
            title: 'Amendments.',
            text:
              'No supplement, modification or amendment of this Agreement will be binding unless executed in writing by both of the Parties.'
          },
          {
            title: 'Notices.',
            text:
              'Any notice or other communication given or made to either Party under this Agreement shall be in writing and delivered by hand, sent by overnight courier service or sent by certified or registered mail, return receipt requested, to the address stated above or to another address as that Party may subsequently designate by notice, and shall be deemed given on the date of delivery.'
          },
          {
            title: 'Waiver.',
            text:
              'Neither Party shall be deemed to have waived any provision of this Agreement or the exercise of any rights held under this Agreement unless such waiver is made expressly and in writing. Waiver by either Party of a breach or violation of any provision of this Agreement shall not constitute a waiver of any subsequent or other breach or violation.'
          },
          {
            title: 'Further Assurances.',
            text:
              'At the request of one Party, the other Party shall execute and deliver such other documents and take such other actions as may be reasonably necessary to effect the terms of this Agreement.'
          },
          {
            title: 'Severability.',
            text:
              'If any provision of this Agreement is held to be invalid, illegal or unenforceable in whole or in part, the remaining provisions shall not be affected and shall continue to be valid, legal and enforceable as though the invalid, illegal or unenforceable parts had not been included in this Agreement.'
          }
        ]
      },
      types: ['hour', 'week', 'month', 'year'],
      professions: [
        {
          id: 'frontend',
          name: 'Frontend'
        },
        {
          id: 'backend',
          name: 'Backend'
        },
        {
          id: 'pm',
          name: 'Project Manager'
        },
        {
          id: 'qa',
          name: 'QA Specialist'
        },
        {
          id: 'designer',
          name: 'Designer'
        }
      ],
      states: {
        yerevan: 'Yerevan',
        california: 'California',
        none: 'Select your state'
      }
    }
  },
  components: {
    CurrencyInput,
    Multiselect
  },
  watch: {
    'contract.term.termin'(val) {
      if (val === 'upon') {
        Object.assign(this.contract.term, {
          afterDay: '',
          afterType: '',
          other: '',
          otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
          onDate: new Date()
        })
      } else if (
        val === 'after' &&
        this.contract.term.onDate.getTime() !== new Date().getTime()
      ) {
        console.log(val)
        Object.assign(this.contract.term, {
          onDate: new Date()
        })
      } else {
        Object.assign(this.contract.term, {
          afterDay: '',
          afterType: '',
          other: '',
          otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        })
      }
    },

    'contract.compensation.fixedWage': {
      deep: true,
      handler(val) {
        this.handleChange(val, 'fixedWage')
      }
    },
    'contract.compensation.setFee': {
      deep: true,
      handler(val) {
        this.handleChange(val, 'setFee')
      }
    },
    'contract.compensation.afterMilestones': {
      deep: true,
      handler(val) {
        this.handleChange(val, 'afterMilestones')
      }
    },
    'contract.compensation.other': {
      handler(val) {
        this.handleChange(val, 'other')
      }
    },
    'contract.compensation.type'(val) {
      this.handleChange(null, val)
    }
  },
  computed: {
    ...mapGetters('api', ['getUser', 'getFullName', 'getFullAddress'])
  },
  mounted() {
    document.body.addEventListener('keydown', this.undoEmployee)
  },
  beforeDestroy() {
    document.body.removeEventListener('keydown', this.undoEmployee)
  },
  methods: {
    handleChange(val, key) {
      if (JSON.stringify(val) === JSON.stringify(getZeroState(key))) return
      this.contract.compensation.type = key
      const changes = ['setFee', 'afterMilestones', 'other', 'fixedWage']
      changes.forEach(
        change =>
          change !== key &&
          (this.contract.compensation[change] = getZeroState(change))
      )
    },
    saveContract() {
      this.successmsg()
    },
    successmsg() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Contract has been saved',
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        this.$router.push('/apps/file-manager')
      })
    },
    clear(which) {
      this.$refs[which]?.clearSignature()
    },
    undoEmployee(e) {
      if (e.ctrlKey && e.which === 90 && this.currentSign) {
        this.$refs[this.currentSign]?.undoSignature()
      }
    },
    deleteMilestone(id) {
      const index = this.contract.compensation.afterMilestones.milestones.findIndex(
        milestone => milestone.id === id
      )
      this.contract.compensation.afterMilestones.milestones.splice(index, 1)
    },
    newMilestone() {
      this.contract.compensation.afterMilestones.milestones.push({
        currency: '$',
        price: '',
        id: ++this.contract.compensation.afterMilestones.milestonesCount
      })
    },
    changeCurrency(value, keyObj, key) {
      this.$set(keyObj, key, value)
      console.log(value)
      this.$forceUpdate()
    },
    handleOther(e, keyObj, key) {
      console.log(e)
      if (!e.target.innerHTML) {
        this.$set(keyObj, 'otherText', '')
        setTimeout(() => {
          this.$set(keyObj, 'otherText', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
        }, 0)
      } else {
        this.$set(keyObj, key, e.target.innerHTML.trim())
        this.$forceUpdate()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/nda-contract.scss';
label.selected,
span.underline {
  text-underline-offset: 7px;
}

select,
input {
  line-height: 15px;
  &.w {
    &150 {
      width: 150px;
    }
    &50 {
      width: 50px;
    }
  }
}
</style>
