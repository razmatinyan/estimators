module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        pageRed: "#841F3B",
        pageBlue: "#016189",
        white: "#fff",
        headerBg: "#EDEAEA",
        teamBg: "#F3F1F1",
        talksBg: "#DFDDDD",
        modalSignUpBg: "#F3F1F1",
        conductor: "#e6d8dc",

        background: {
          mainWhiteBg: "var(--bg-background-mainWhiteBg)",
          mainGrayBg: "var(--bg-background-mainGrayBg)",
          mainBlueBg: "var(--bg-background-mainBlueBg)"
        },

        copy: {
          textLightMode: "var(--text-copy-blue)",
          textDarkMode: "var(--text-copy-white)"
        },

      },
      height: {
        teamAroundHeight: "500px",
        teamAroundHeight2xl: "300px",
        teamWrapH: "800px",
        team2xlH: "450px",
        teamXlH: "400px",
        teamLgH: "300px",
        teamMembersH: "720px",
        teamTalksH: "720px",
        mobileCircleH: "275px",
        lgThirdH: "470px",
        mdThirdH: "450px",
        smThirdH: "350px",
TeamMembersH2xl: "500px",
        xlTeamMembersH: "600px",
        lgTeamMembersH: "500px",
        mdTeamMembersH: "550px",
        smTeamMembersH: "450px",
TeamTalksH2xl: "550px",
        xlTeamTalksH: "600px",
        lgTeamTalksH: "500px",
        mdTeamTalksH: "550px",
        smTeamTalksH: "450px",
      },

      width: {
        teamAroundWidth: "500px",
        teamAroundWidth2xl: "300px",
        team2xlW: "450px",
        teamXlW: "400px",
        teamLgW: "300px",
        firstW: "650px",
        secondW: "650px",
        thirdW: "650px",
        signInPageW: "650px",
        uiDesignerW: "1000px",
 TeamMembersW2xl: "580px",
        teamTalkW: "650px",
        teamTalkWlg: "430px",
        teamTalksWxl: "500px",
        mobileW: "375px",
        mobileCircleW: "275px",
FirstW2xl: "500px",
        xlFirstW: "500px",
        lgFirstW: "390px",
        mdFirstW: "450px",
        smFirstW: "350px",
SecondW2xl: "500px",
        xlSecondW: "500px",
        lgSecondW: "390px",
        mdSecondW: "450px",
        smSecondW: "350px",
ThirdW2xl: "500px",
        xlThirdW: "500px",
        lgThirdW: "390px",
        mdThirdW: "450px",
        smThirdW: "350px",
        ability2xlW: "500px",
        abilityLgW: "1050px",
        dividerW: "2px"
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        'xs': '14px',
        'sm': '.875rem',
        'tiny': '.875rem',
      },

      screens: {
        'xs': {'min': '450'},
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px', 'max': '1920px'},
      },
    },
  },
  variants: {},
  plugins: [],
}
