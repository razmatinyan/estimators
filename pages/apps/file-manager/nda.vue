<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="nda px-4 mx-auto">
      <div class="topState">
        <span>State of </span>
        <select v-model="nda.state">
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
        NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT
      </p>
      <hr class="mb-4 border-black" style="margin-top: 2px" />
      <div class="body mb-3">
        <p>
          <span class="indent">
            <span
              class="cursor-help"
              title="An employee non-disclosure and confidentiality agreement is a legal contract between a company and its employee. Some companies make this agreement standard for all employees. This means that the employee agrees not to use or make public information learned while working for the company.

This contract specifies the type of information which cannot be disclosed. This allows employees a better understanding of the information it would be detrimental to share."
              >This Employee Non-Disclosure and Confidentiality Agreement</span
            >
            (this “Agreement”) is entered into as of the
          </span>
          <v-date-picker mode="date" v-model="nda.date">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="date-picker text-center"
                :value="inputValue"
                v-on="inputEvents"
              /> </template
          ></v-date-picker>
          (the “Effective Date”) by and between:
        </p>
        <p>
          <b>Employer:</b>
          <select v-model="nda.employerName">
            <option
              v-for="(employer, key) in employers.name"
              :key="key"
              :value="key"
              :disabled="key == 'none'"
              >{{ employer }}</option
            >
          </select>
          , a(n) (Check one)
          <span
            v-for="(type, key) in employers.type"
            :key="key"
            class="mr-3 custom-control custom-checkbox"
            style="display: inline-block !important"
          >
            <input
              type="radio"
              :id="key"
              class="custom-control-input"
              v-model="nda.employerType"
              :value="key"
            />
            <label
              class="custom-control-label inlineMy"
              :class="{ selected: nda.employerType === key }"
              :for="key"
              >{{ type }}</label
            > </span
          >and
        </p>
        <p>
          <span>
            <b class="mr-1">Employee: </b>
            <!-- <input
              placeholder="Employee full name"
              type="text"
              class="flex-1"
              v-model="nda.employeeName"
            /> -->
            <select v-model="nda.employeeName">
              <option
                v-for="(employer, key) in employeesNames"
                :key="key"
                :value="key"
                :disabled="key == 'none'"
                >{{ employer }}</option
              >
            </select> </span
          >, an employee of the Company (the "Employee").
        </p>
        <p>
          <span class="indent">The</span> Company hired the Employee as

          <Multiselect
            v-model="nda.employeePosition"
            :options="employees"
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
                Select your position(s)
              </span></template
            >
          </Multiselect>
          [Position] pursuant to the terms and conditions of that certain
          Employment Agreement executed between the Parties on the
          <v-date-picker mode="date" v-model="nda.partiesDate">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="date-picker text-center"
                :value="inputValue"
                v-on="inputEvents"
              /> </template
          ></v-date-picker>
          (the "Employment Agreement"). In connection with the Employee's duties
          under the Employment Agreement, the Company may disclose to the
          Employee certain confidential and proprietary information unique and
          valuable to its ongoing business operations. In consideration of the
          Employee's employment by the Company and the covenants and mutual
          promises contained herein, the parties agree as follows:
        </p>
        <ol class="list-decimal list-inside puncts">
          <li>
            <span>
              <b
                class="cursor-help"
                title="Examples Account information: Tax returns, financial forecasts, purchasing lists, etc.
Business operations : Processes and ideas related to conducting the disclosing party's business

Computer and software information: Information related to computer hardware, software, code, or programs including upgrades and modifications.

Customer information: Customer contact lists, learned sales information, etc.
Marketing and sales information: : Sales targets, marketing practices, promo  activities, etc.
Product information: Products to be manufactured or sold including information on fixes and upgrades.

Proprietary rights : All rights in respect to copyrights, domain names, licensing rights, etc.
Service information : Method, skills, and training about services provided by the disclosing party"
                >Confidential Information.</b
              >
              Confidential information is: (Check one) </span
            ><br />
            <span
              v-for="(info, key) in confidentialInformation"
              :key="key"
              class="mr-3 mt-2 custom-control custom-checkbox"
            >
              <input
                type="radio"
                :id="key"
                class="custom-control-input"
                v-model="nda.employerType"
                :value="key"
              />
              <label
                class="custom-control-label"
                :class="{ selected: nda.employerType === key }"
                :for="key"
                ><b>{{ key }}</b
                >{{ info.text }}</label
              >
              <ul v-if="info.subSection">
                <span
                  v-for="(section, keySection) in info.subSection"
                  :key="keySection"
                  class="mr-3 mt-2 custom-control custom-checkbox"
                >
                  <div>
                    <span
                      :style="{ float: section === 'Other:' ? 'left' : 'none' }"
                    >
                      <input
                        type="checkbox"
                        :id="keySection"
                        class="custom-control-input"
                        v-model="nda.employerTypeSpecific"
                        :value="section"
                      />
                      <label
                        class="custom-control-label"
                        :class="{
                          selected: !!~nda.employerTypeSpecific.indexOf(section)
                        }"
                        :for="keySection"
                        >{{ section }}
                      </label>
                    </span>
                    <span
                      v-if="section === 'Other:'"
                      :contenteditable="true"
                      class="outline-none underline ml-3"
                      style="width: 300px"
                      spellcheck="false"
                      v-html="otherText"
                      @input="handleOther"
                    >
                    </span>
                  </div>
                </span>
              </ul>
            </span>
          </li>
          <li>
            <span>
              <b>{{ secondPunct.head }}</b
              >{{ secondPunct.title }}
            </span>
            <ol class="exclusionsList">
              <li v-for="(punct, index) in secondPunct.list" :key="index">
                {{ punct }}
              </li>
            </ol>
          </li>
          <li>
            <span>
              <b>{{ thirdPunct.head }}</b
              >{{ thirdPunct.title }}
            </span>
            <ol class="exclusionsList">
              <li v-for="(punct, index) in thirdPunct.list" :key="index">
                {{ punct }}
              </li>
            </ol>
            <span class="mr-3 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="thirdSurvive"
                class="custom-control-input"
                v-model="nda.confidentialInformationShall"
                value="survive"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: nda.confidentialInformationShall === 'survive'
                }"
                for="thirdSurvive"
                >Survive the termination of this Agreement, and at no time will
                the Employee be permitted to disclose Confidential Information,
                except to the extent that such Confidential Information is
                excluded from the obligations of confidentiality under this
                Agreement pursuant to Paragraph 2 above.
              </label>
            </span>
            <span class="mr-3 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="thirdRemain"
                class="custom-control-input"
                v-model="nda.confidentialInformationShall"
                value="remain"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: nda.confidentialInformationShall === 'remain'
                }"
                for="thirdRemain"
                >Remain in effect until
                <input
                  type="number"
                  class="text-center"
                  style="width: 60px; transform: translateY(-1px); height: 16px"
                  placeholder="2"
                  maxlength="2"
                  v-model="nda.remain.count"
                />
                (Check one)
                <span
                  class="mr-1 custom-control custom-checkbox thirdPunct"
                  style="display: inline-block !important"
                >
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="thirdMonth"
                    value="month"
                    v-model="nda.remain.type"
                  />
                  <label
                    for="thirdMonth"
                    class="custom-control-label"
                    :class="{
                      selected: nda.remain.type === 'month'
                    }"
                  >
                    months
                  </label> </span
                ><span
                  class="mr-1 custom-control custom-checkbox thirdPunct"
                  style="display: inline-block !important"
                >
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="thirdYear"
                    value="year"
                    v-model="nda.remain.type"
                  />
                  <label
                    for="thirdYear"
                    class="custom-control-label"
                    :class="{
                      selected: nda.remain.type === 'year'
                    }"
                  >
                    years
                  </label>
                </span>
                from the date hereof, except to the extent that such
                Confidential Information is excluded from the obligations of
                confidentiality under this Agreement pursuant to Paragraph 2
                above.
              </label>
            </span>
          </li>
          <li>
            <span>
              <b>{{ forthPunct.head }}</b
              >{{ forthPunct.title }}
            </span>
            <p class="mt-2">{{ forthPunct.text }}</p>

            <span class="mr-3 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="forthDuring"
                class="custom-control-input"
                v-model="nda.nonCompete.type"
                value="during"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: nda.nonCompete.type === 'during'
                }"
                for="forthDuring"
                >During the term of the Employee’s relationship with the
                Company.
              </label>
            </span>
            <span class="mr-3 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="forthUntil"
                class="custom-control-input"
                v-model="nda.nonCompete.type"
                value="until"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: nda.nonCompete.type === 'until'
                }"
                for="forthUntil"
                >From the date of this Agreement until
                <v-date-picker mode="date" v-model="nda.nonCompete.untilDate">
                  <template v-slot="{ inputValue, inputEvents }">
                    <input
                      class="date-picker text-center"
                      style="transform: translateY(-1px); height: 16px"
                      :value="inputValue"
                      v-on="inputEvents"
                    /> </template
                ></v-date-picker>
              </label>
            </span>
          </li>

          <li>
            <span>
              <b>{{ fifthPunct.head }}</b
              >{{ fifthPunct.title }}
            </span>
            <p class="mt-2">{{ fifthPunct.text }}</p>

            <span class="mr-3 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="fifthDuring"
                class="custom-control-input"
                v-model="nda.nonSolicitation.type"
                value="during"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: nda.nonSolicitation.type === 'during'
                }"
                for="fifthDuring"
                >During the term of the Employee’s relationship with the
                Company.
              </label>
            </span>
            <span class="mr-3 custom-control custom-checkbox thirdPunct">
              <input
                type="radio"
                id="fifthForthUntil"
                class="custom-control-input"
                v-model="nda.nonSolicitation.type"
                value="until"
              />
              <label
                class="custom-control-label"
                :class="{
                  selected: nda.nonSolicitation.type === 'until'
                }"
                for="fifthForthUntil"
                >From the date of this Agreement until
                <v-date-picker
                  mode="date"
                  v-model="nda.nonSolicitation.untilDate"
                >
                  <template v-slot="{ inputValue, inputEvents }">
                    <input
                      class="date-picker text-center"
                      style="transform: translateY(-1px); height: 16px"
                      :value="inputValue"
                      v-on="inputEvents"
                    /> </template
                ></v-date-picker>
              </label>
            </span>
          </li>

          <li>
            <b>Disclaimer.</b> There is no representation or warranty, express
            or implied, made by the Company as to the accuracy or completeness
            of any of its Confidential Information.
          </li>

          <li>
            <b>Remedies.</b> The Employee acknowledges that use or disclosure of
            any Confidential Information in a manner inconsistent with this
            Agreement will give rise to irreparable injury for which damages
            would not be an adequate remedy. Accordingly, in addition to any
            other legal remedies which may be available at law or in equity, the
            Company shall be entitled to equitable or injunctive relief against
            the unauthorized use or disclosure of Confidential Information. The
            Company shall be entitled to pursue any other legally permissible
            remedy available as a result of such breach, including but not
            limited to damages, both direct and consequential. In any action
            brought by the Company under this Section, the Company shall be
            entitled to recover its attorney’s fees and costs from the Employee.
          </li>

          <li>
            <span>
              <b>Notices.</b> All notices given under this Agreement must be in
              writing. A notice is effective upon receipt and shall be sent via
              one of the following methods: delivery in person, overnight
              courier service, certified or registered mail, postage prepaid,
              return receipt requested, addressed to the party to be notified at
              the below address or by facsimile at the below facsimile number or
              in the case of either party, to such other party, address or
              facsimile number as such party may designate upon reasonable
              notice to the other party.
            </span>
            <p class="underline mt-4">Disclosing Party</p>
            <span
              v-for="(value, key) in nda.disclosingParty"
              :key="key.split(' ').join('') + 'rep'"
              class="flex flex-wrap mt-2"
              ><label class="m-0 mr-1" :for="key.split(' ').join('') + 'rep'"
                >{{ key }}:</label
              >
              <input
                type="text"
                class="flex-1"
                :id="key.split(' ').join('') + 'rep'"
                v-model="nda.disclosingParty[key]"
              />
            </span>
            <p class="underline mt-4">Receiving Party</p>
            <span
              v-for="(value, key) in nda.receivingParty"
              :key="key.split(' ').join('') + 'res'"
              class="flex flex-wrap mt-2"
              ><label class="m-0 mr-1" :for="key.split(' ').join('') + 'res'"
                >{{ key }}:</label
              >
              <input
                type="text"
                class="flex-1"
                :id="key.split(' ').join('') + 'res'"
                v-model="nda.receivingParty[key]"
              />
            </span>
          </li>
          <li>
            <span>
              <b
                class="cursor-help"
                title="How long will this agreement last for?  The agreement should last as long as the receiving party must keep the information confidential.  You can specify that the agreement is valid as long as the receiving party is employed by the disclosing party, or for a fixed term – if the employee is being hired on a contract basis. You can also include the period of time in which discussions are held before the employment officially begins or after it ends."
                >Termination.</b
              >
              This Agreement will terminate on the earlier of:
            </span>
            <p class="ml-3 mt-2">
              (a) the written agreement of the parties to terminate this
              Agreement;
            </p>
            <p class="ml-3">
              (b) the cessation of the Employee's employment; or
            </p>
            <p class="ml-3">
              (c)
              <input
                type="number"
                class="text-center"
                style="width: 60px; transform: translateY(-1px); height: 16px"
                placeholder="2"
                maxlength="2"
                v-model="nda.termination.count"
              />
              (Check one)
              <span
                class="mr-1 custom-control custom-checkbox thirdPunct"
                style="display: inline-block !important"
              >
                <input
                  type="radio"
                  class="custom-control-input"
                  id="terminMonth"
                  value="month"
                  v-model="nda.termination.type"
                />
                <label
                  for="terminMonth"
                  class="custom-control-label"
                  :class="{
                    selected: nda.termination.type === 'month'
                  }"
                >
                  months
                </label> </span
              ><span
                class="mr-1 custom-control custom-checkbox thirdPunct"
                style="display: inline-block !important"
              >
                <input
                  type="radio"
                  class="custom-control-input"
                  id="termYear"
                  value="year"
                  v-model="nda.termination.type"
                />
                <label
                  for="termYear"
                  class="custom-control-label"
                  :class="{
                    selected: nda.termination.type === 'year'
                  }"
                >
                  years
                </label>
              </span>
              from the date hereof.
            </p>
          </li>
          <li>
            <b>Amendment.</b> This Agreement may be amended or modified only by
            a written agreement signed by both of the parties.
          </li>
          <li>
            <b>Jurisdiction.</b> This Agreement will be governed by and
            construed in accordance with the laws of the State of
            <span class="underline">{{
              nda.state === 'none'
                ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                : states[nda.state]
            }}</span
            >, without regard to the principles of conflict of laws. Each party
            consents to the exclusive jurisdiction of the courts located in the
            State of
            <span class="underline">{{
              nda.state === 'none'
                ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                : states[nda.state]
            }}</span>
            for any legal action, suit or proceeding arising out of or in
            connection with this Agreement. Each party further waives any
            objection to the laying of venue for any such suit, action or
            proceeding in such courts.
          </li>
          <li>
            <b>No Offer or Sale.</b> Nothing in this Agreement will be deemed a
            sale or offer for sale of Confidential Information nor obligate the
            Company to grant the Employee a license or any rights, by statute,
            common law theory of estoppel or otherwise, to Confidential
            Information.
          </li>
          <li>
            <b>Miscellaneous.</b> No joint venture, partnership or agency
            relationship exists between the Employee, the Company or any
            third-party as a result of this Agreement. This Agreement will inure
            to the benefit of and be binding on the respective successors and
            permitted assigns of the parties. Neither party may assign its
            rights or delegate its duties under this Agreement without the other
            party’s prior written consent. In the event that any provision of
            this Agreement is held to be invalid, illegal or unenforceable in
            whole or in part, the remaining provisions shall not be affected and
            shall continue to be valid, legal and enforceable as though the
            invalid, illegal or unenforceable parts had not been included in
            this Agreement. Neither party will be charged with any waiver of any
            provision of this Agreement, unless such waiver is evidenced by a
            writing signed by the party and any such waiver will be limited to
            the terms of such writing.
          </li>
        </ol>
        <p>
          IN WITNESS WHEREOF, the parties hereto have executed this Agreement as
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
                placeholder="Employee Name"
                v-model="nda.signs.employee.name"
              />
              <input
                type="text"
                class="w-full"
                placeholder="Company Name"
                v-model="nda.signs.employee.company"
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
                placeholder="Employer Name"
                v-model="nda.signs.employer.name"
              />
              <input
                type="text"
                class="w-full"
                placeholder="Company Name"
                v-model="nda.signs.employer.company"
              />
            </div>
            <span style="font-size: 12px" class="text-gray-800">CTRL+Z</span>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="btn text-white px-4"
            style="background-color: #841F3B !important; font-size: 20px"
            @click="saveNDA"
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
import Multiselect from 'vue-multiselect'

export default {
  middleware: 'client',
  components: { Multiselect },
  head() {
    return {
      title: `${this.title} | Estimators`
    }
  },
  data() {
    return {
      title: 'NDA',
      items: [
        {
          text: 'File Manager',
          to: '/apps/file-manager'
        },
        {
          text: 'NDA',
          active: true
        }
      ],
      currentSign: null,
      options: {
        penColor: '#000',
        backgroundColor: 'rgba(255,255,255)'
      },
      otherText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
      states: {
        yerevan: 'Yerevan',
        california: 'California',
        none: 'Select your state'
      },
      employeesNames: {
        aram: 'Aram',
        vahagn: 'Vahagn Melkonyan',
        none: 'Select employee'
      },
      employers: {
        name: {
          estimators: 'Estimators',
          a2z: 'A2Z',
          none: 'Select employer'
        },
        type: {
          individual: 'Individual',
          corporation: 'Corporation',
          llc: 'Limited Liability Company',
          partnership: 'Partnership',
          lp: 'Limited Partnership',
          company: 'Limited Liability Partnership (the "Company")'
        }
      },
      employees: [
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
        },
        {
          id: 'team',
          name: 'Team'
        }
      ],
      confidentialInformation: {
        'All information shared by the Company.': {
          text: ` "Confidential Information" shall mean (i) all information relating to the Company’s products, business and operations including, but not limited to, financial documents and plans, customers, suppliers, manufacturing partners, marketing strategies, vendors, products, product development plans, technical product data, product samples, costs, sources, strategies, operations procedures, proprietary concepts, inventions, sales leads, sales data, customer lists, customer profiles, technical advice or knowledge, contractual agreements, price lists, supplier lists, sales estimates, product specifications, trade secrets, distribution methods, inventories, marketing strategies, source code, software, algorithms, data, drawings or schematics, blueprints, computer programs and systems and know-how or other intellectual property of the Company and its affiliates that may be at any time furnished, communicated or delivered by the Company to the Employee, whether in oral, tangible, electronic or other form; (ii) the terms of any agreement, including this Agreement, and the discussions, negotiations and proposals related to any agreement; (iii) information acquired during any tours of the Company’s facilities; and (iv) all other non-public information provided by the Company whosoever. All Confidential Information shall remain the property of the Company. `
        },

        'Only information marked ‘Confidential.’': {
          text: ` "Confidential Information," exchanged by the parties and entitled to protection hereunder, shall be identified or marked as such by an appropriate stamp or marking on each document exchanged designating the information as confidential or proprietary. `
        },

        'Specific information.': {
          subSection: [
            ` 'Accounting Information' which includes all books, tax returns, financial information, financial forecasts, pricing lists, purchasing lists and memos, pricing forecasts, purchase order information, supplier costs and discounts, or related financial or purchasing information.`,
            `'Business Operations' which includes all processes, proprietary information or data, ideas or the like, either in existence or contemplated related to the Company’s daily and long-term plans for conducting the Company's business.`,
            `   'Computer Technology' which includes all computer hardware, software or other tangible and intangible equipment or code either in existence or development.
 `,
            `   'Customer Information' which includes the names of entities or individuals, including their affiliates and representatives, that the Company provides and sells its services or goods to, as well as any associated information, including but not limited to, leads, contact lists, sales plans and notes, shared and learned sales information such as pricing sheets, projections or plans, agreements, or such other data.`,
            ` 'Intellectual Property' which includes patents, trademarks, service marks, logos, trade names, internet or website domain names, rights in designs and schematics, copyrights (including rights in computer software), moral rights, database rights, in each case whether registered or unregistered and including applications for registration, in all rights or forms anywhere in the world.`,
            `'Marketing and Sales Information' which includes all customer leads, sales targets, sales markets, advertising materials, sales territories, sales goals and projections, sales and marketing processes or practices, training manuals or other documentation and materials related to the sales, marketing and promotional activities of the the Company and its products or services. `,
            `'Proprietary Rights’ which includes any and all rights, whether registered or unregistered, in and with respect to patents, copyrights, trade names, domain names, logos, trademarks, service marks, confidential information, know-how, trade secrets, moral rights, contract or licensing rights, whether protected under contract or otherwise under law, and other similar rights or interests in intellectual property. `,
            `'Procedures and Specifications' which includes all procedures and other specifications, criteria, standards, methods, instructions, plans or other directions prescribed by the Company for the manufacture, preparation, packaging and labelling, and sale of its products or services. `,
            `'Product Information' which includes the Company’s products which are being contemplated for sale, manufactured, marketed, listed, or sold, including any fixes, revisions, upgrades, or versions, of which consists of all data, software and documentation related thereto.`,
            `'Service Information' which means the services provided by the Company, including the method, details, means, skills and training, which consists of all data, software and documentation related thereto. `,
            `'Software Information' which means the proprietary computer programs of the Company, including all fixes, upgrades, new versions, new enhancements, modifications, edits, conversions, replacements, or the like, in machine readable form or documentation and materials, and all copies and translations of such computer programs, documentation and materials, regardless of the form or media of expression or storage. `,
            'Other:'
          ],
          text: ` The term “Confidential Information” as used in this Agreement shall mean any data or information that is competitively sensitive material and not generally known to the public, including, but not limited to, information relating to any of the following, which the Company considers confidential: (Check all that apply) `
        }
      },
      secondPunct: {
        head: 'Exclusions from Confidential Information.',
        title:
          ' The obligation of confidentiality with respect to Confidential Information will not apply to any information:',
        list: [
          ' If the information is or becomes publicly known and available other than as a result of prior unauthorized disclosure by the Employee;',
          ' If the information is or was received by the Employee from a third-party source which, to the best knowledge of the Employee, is or was not under a confidentiality obligation to the Company with regard to such information;',
          'If the information is disclosed by the Employee with the Company’s prior written permission and approval;',
          'If the information is independently developed by the Employee prior to disclosure by the Company and without the use and benefit of any of the Company’s Confidential Information; or',
          ' If the Employee may disclose only such portion of the Confidential Information which it is legally obligated to disclose the Employee is legally compelled by applicable law, by any court, governmental agency, or regulatory authority or subpoena or discovery request in pending litigation, but only if, to the extent lawful, the Employee gives prompt written notice of that fact to the Company prior to disclosure so that the Company may request a protective order or other remedy, the Employee may disclose only such portion of the Confidential Information which it is legally obligated to disclose.'
        ]
      },
      thirdPunct: {
        head: 'Obligation to Maintain Confidentiality.',
        title: ' With respect to Confidential Information:',
        list: [
          ' The Employee agrees to retain the Confidential Information in strict confidence, to protect the security, integrity, and confidentiality of such information and to not permit unauthorized access to or unauthorized use, disclosure, publication, or dissemination of Confidential Information except in conformity with this Agreement. ',
          'Confidential Information is and will remain the sole and exclusive property of the Company and will not be disclosed or revealed by the Employee, except (i) to other employees of the Company who have a need to know such information and agree to be bound by the terms of this Agreement. ',
          ' The Employee agrees that, in the event the Employee must download, access, process, transfer or otherwise communicate Confidential Information, the Employee will comply with all laws and regulations applicable to exports and re-exports of data and information and will not, directly or indirectly, export or re-export any Confidential Information in violation of such laws and regulations, including without limitation, those prohibiting export or re-export to restricted countries or without governmental authorization. ',
          ' Upon termination of this Agreement or at the request of the Company, the Employee will ensure that all Confidential Information and all documents, memoranda, notes and other writings or electronic records prepared by the Employee that include or reflect any Confidential Information in the Employee’s actual or constructive possession are returned to the Company. ',
          'The obligation not to disclose Confidential Information shall: (Check one)'
        ]
      },
      forthPunct: {
        head: 'Non-Compete.',
        title:
          ' (Cross out if you do not want to include a non-solicitation clause)',
        text:
          'The Employee agrees not to solicit any employee or independent contractor of the Company on behalf of any other business enterprise, nor shall the Employee induce any employee or independent contractor associated with the Company to terminate or breach an employment, contractual or other relationship with the Company: (Check one)'
      },
      fifthPunct: {
        head: 'Non-Solicitation.',
        title:
          ' (Cross out if you do not want to include a non-compete clause)',
        text:
          'The Employee agrees that at no time will the Employee engage in any business activity which is competitive with the Company, nor work for any company which competes with the Company: (Check one)'
      },
      nda: {
        state: 'none',
        date: new Date(),
        partiesDate: new Date(),
        employerName: 'none',
        employerType: '',
        employerTypeSpecific: [],
        employeeName: 'none',
        employeePosition: [],
        confidentialInformationShall: '',
        signs: {
          employer: {
            name: '',
            company: ''
          },
          employee: {
            name: '',
            company: ''
          }
        },
        remain: {
          count: '',
          type: ''
        },
        termination: {
          count: '',
          type: ''
        },
        nonCompete: {
          type: '',
          untilDate: new Date()
        },
        nonSolicitation: {
          type: '',
          untilDate: new Date()
        },
        disclosingParty: {
          Name: '',
          'Representative name': '',
          Title: '',
          Address: '',
          'Phone number': '',
          'Fax number': ''
        },
        receivingParty: {
          Name: '',
          'Representative name': '',
          Title: '',
          Address: '',
          'Phone number': '',
          'Fax number': ''
        }
      }
    }
  },
  watch: {
    'nda.employerTypeSpecific'(val) {
      if (val.length) {
        this.nda.employerType = 'Specific information.'
      }
    },
    'nda.employerType'(val) {
      if (val !== 'Specific information.') {
        this.nda.employerTypeSpecific = []
      }
    },
    'nda.confidentialInformationShall'(val) {
      if (val === 'survive') {
        this.nda.remain = {
          count: '',
          type: ''
        }
      }
    },
    'nda.remain': {
      deep: true,
      handler(val) {
        if (val.count || val.type)
          this.$set(this.nda, 'confidentialInformationShall', 'remain')
      }
    }
  },
  mounted() {
    document.body.addEventListener('keydown', this.undoEmployee)
  },
  beforeDestroy() {
    document.body.removeEventListener('keydown', this.undoEmployee)
  },
  methods: {
    saveNDA() {
      this.successmsg()
    },
    successmsg() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'NDA has been saved',
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
    handleOther(e) {
      if (!e.target.innerHTML) {
        this.otherText = ''
        setTimeout(() => {
          this.otherText = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        }, 0)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/nda-contract.scss';
</style>
