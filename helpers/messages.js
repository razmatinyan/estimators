export default {
  sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000))
  },
  messages: [
    {
      uuid: 0,
      title: '',
      // date: new Date(),
      message: 'WELCOME TO ESTIMATORS!!!',
      imageURL: 'logo',
      isUserMessage: true
    },
    {
      uuid: 1,
      title: 'Project Manager',
      // date: new Date(),
      message: 'Hey guys @backend , @frontend, @Qa',
      imageURL: 'pm',
      isUserMessage: false
    },
    {
      uuid: 2,
      title: 'Project Manager',
      // date: new Date(),
      message:
        "I'm sorry, I've got a call from my client. Be online in 30 minutes",
      imageURL: 'pm',
      isUserMessage: false
    },
    {
      uuid: 3,
      title: 'Backend Developer',
      // date: new Date(),
      message: '+',
      imageURL: 'Back',
      isUserMessage: false
    },
    {
      uuid: 4,
      title: 'Frontend Developer',
      // date: new Date(),
      message: '+',
      imageURL: 'Front',
      isUserMessage: false
    },
    {
      uuid: 5,
      title: 'QA',
      // date: new Date(),
      message: '+',
      imageURL: 'QA',
      isUserMessage: false
    },
    {
      uuid: 6,
      title: 'UI/UX Designer',
      // date: new Date(),
      message: 'Is anything required from my side?',
      imageURL: 'Ui_ux',
      isUserMessage: false
    },
    {
      uuid: 7,
      title: 'Project Manager',
      // date: new Date(),
      message:
        "Ya Please stay online, I didn't tell the client that we provide free consultations",
      imageURL: 'pm',
      isUserMessage: false
    },
    {
      uuid: 8,
      title: '',
      // date: new Date(),
      message:
        'Thanks for checking us. You can reach our QA, PM, Front, Back Teams via our channel and they will provide you a consultancy on a free of charge basis.',
      imageURL: 'logo',
      isUserMessage: true
    }
  ]
}
