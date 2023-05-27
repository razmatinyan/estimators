<template>
  <div class="w-1/2 px-6 py-6">
    <div
      class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg pr-10"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <img src="@/assets/images/BePartnerImg/person.png" alt="person" />
        </span>
      </div>
      <input
        type="text"
        name="FirstName"
        id="FirstName"
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-xl outline-none"
        placeholder="First name"
      />
    </div>
    <div
      class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg pr-10"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <img src="@/assets/images/BePartnerImg/person.png" alt="person" />
        </span>
      </div>
      <input
        type="text"
        name="LastName"
        id="LastName"
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-xl outline-none"
        placeholder="Last name"
      />
    </div>
    <div
      class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg pr-10"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <img src="@/assets/images/BePartnerImg/armenia.png" alt="flag" />
        </span>
      </div>
      <input
        type="text"
        name="Country"
        id="Country"
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-xl outline-none"
        placeholder="Country"
      />
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <img src="@/assets/images/BePartnerImg/polygon.png" alt="arrow" />
        </span>
      </div>
    </div>
    <div class="flex">
      <div
        class="flex flex-wrap items-stretch w-48 mr-4 mb-3 relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg pr-10"
      >
        <input
          type="text"
          name="State"
          id="State"
          class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="State"
        />
      </div>
      <div
        class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg pr-10"
      >
        <div class="flex -mr-px justify-center w-15 p-4">
          <span
            class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
            <img src="@/assets/images/BePartnerImg/place.png" alt="place" />
          </span>
        </div>
        <input
          type="text"
          name="City"
          id="City"
          class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-xl outline-none"
          placeholder="City"
        />
      </div>
    </div>
    <div
      class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg pr-10"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <img src="@/assets/images/BePartnerImg/street.png" alt="street" />
        </span>
      </div>
      <input
        type="text"
        name="StreetAddress"
        id="StreetAddress"
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-xl outline-none"
        placeholder="Street address"
      />
    </div>
    <div class="flex">
      <div
        class="flex flex-wrap items-stretch w-full mr-4 mb-3 relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg pr-10"
      >
        <div class="flex -mr-px justify-center w-15 p-4">
          <span
            class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
            <img
              src="@/assets/images/BePartnerImg/building.png"
              alt="building"
            />
          </span>
        </div>
        <input
          type="text"
          name="Building"
          id="Building"
          class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-xl outline-none"
          placeholder="Apt/Suite"
        />
      </div>
      <div
        class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg pr-10"
      >
        <div class="flex -mr-px justify-center w-15 p-4">
          <span
            class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
            <img
              src="@/assets/images/BePartnerImg/zipcode.png"
              alt="zipCode"
            />
          </span>
        </div>
        <input
          type="text"
          name="ZipCode"
          id="ZipCode"
          class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-xl outline-none"
          placeholder="Zip code"
        />
      </div>
    </div>
    <div class="">
      <div
        class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center pr-10 border-b-2 border-pageBlue"
      >
        <div class="flex -mr-px justify-center w-15 p-4">
          <span
            class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
            <img
              src="@/assets/images/BePartnerImg/linkedin.png"
              alt="linkedin"
            />
          </span>
        </div>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="https://"
        />
      </div>
      <div
        class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center pr-10 border-b-2 border-pageBlue"
      >
        <div class="flex -mr-px justify-center w-15 p-4">
          <span
            class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
            <img src="@/assets/images/BePartnerImg/vector.png" alt="behance" />
          </span>
        </div>
        <input
          type="text"
          name="Behance"
          id="Behance"
          class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="https://"
        />
      </div>
      <div
        class="flex flex-wrap items-stretch w-full mb-3 relative h-15 bg-white items-center mb-6 pr-10 border-b-2 border-pageBlue"
      >
        <div class="flex -mr-px justify-center w-15 p-4">
          <span
            class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
            <img src="@/assets/images/BePartnerImg/group.png" alt="dribble" />
          </span>
        </div>
        <input
          type="text"
          name="Dribble"
          id="Dribble"
          class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="https://"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputsList'
}
</script>

<style scoped></style>
