export const gameStates = {
  completedItMate: 'COMPLETED_IT_MATE',
  gameOver: 'GAME_OVER',
  inGame: 'IN_GAME',
  preGame: 'PRE_GAME',
  success: 'SUCCESS'
}

// each option will be either low, medium or high risk, increasing or decreasing the chance of waking baby
export const risk = {
  low: 'LOW',
  medium: 'MEDIUM',
  high: 'HIGH'
}

export const scenarios = [
  {
    text: 'Baby has fallen asleep peacefully and easily in your arms. There\'s a match on TV just about to start. Do you hold the baby while you watch the match, put the baby in a moses basket in the room, or give the baby to your partner to look after?',
    options: [
      {
        buttonText: 'Hold Baby',
        failureMessage: 'You can\'t hide your primal scream of joy as Joelinton scores. The baby wakes up with a start and, seeing the frozen mix of joy and horror on your face as you realise the gravity of the situation and all of the life choices that have led you to this moment, contorts its face and cries out in existential crisis.',
        successMessage: 'The game is a predictable snoozefest. Aren\'t games involving your team always? Baby slumbers peacefully and you hate yourself for not making more of the time. This is winning.',
        risk: risk.low
      },
      {
        buttonText: 'Moses Basket',
        failureMessage: 'As you manoeuvre baby over the airspace of the Moses basket, its dreams shift uneasily to being dangled over a 4,000m sheer cliff. It jerks awake in horror and, as you almost drop it and a startled word escapes the Profanisaurus in your brain, baby scrunches up its face and cries.',
        successMessage: 'Michael Owen is commentating. You almost fall asleep yourself placing baby in the Moses basket. Baby dreams about a far distant ancestor explaining how that would have been a goal if it went in. This is winning.',
      },
      {
        buttonText: 'Give to Partner',
        failureMessage: 'Baby dreams it is being abandoned by its daddy. Waking from this dream and finding itself halfway out of your arms, it realises its nightmare has come true and cries in infinite betrayal.',
        successMessage: 'Baby cuddles into partner\'s safe, warm embrace and snuggles down for a long nap. Partner silently hates you. This is winning.',
      }
    ]
  },
  {
    text: 'Baby has just finished a big bottle of milk. It\'s looking pretty content. Do you try to burp baby, play with baby or gaze lovingly into baby\'s eyes?',
    options: [
      {
        buttonText: 'Burp Baby',
        failureMessage: 'Baby was so proud at having taken a full bottle without swallowing any air! But what\'s this? Dad didn\'t trust me?! Baby, sensing daddy will never trust it to do anything right, wails in despair.',
        successMessage: 'Baby pulls its head back before launching it forward, spraying a copious wave of milky sick in your face. Baby giggles. This is winning.',
      },
      {
        buttonText: 'Play',
        failureMessage: 'You go to play with baby before remembering that you have no idea how to actually entertain a baby. After 4 seconds of waiting, baby loses patience and starts screaming.',
        successMessage: 'While trying to remember all your dad training, your face contorts into such an odd picture of concentration and consternation that baby laughs at it. This is winning.',
      },
      {
        buttonText: 'Gaze Into Eyes',
        failureMessage: 'You gaze lovingly in stunned awe at this wonderful creature you created. It hates you and cries.',
        successMessage: 'You gaze lovingly in stunned awe at this wonderful creature you created. Baby gazes back, confused. You start to wonder with mild paranoia if baby is judging you for having feelings. At least it\'s not crying. This is winning.',
      }
    ]
  },
  {
    text: 'You\'re writing an important email to an important business person. It\'s vitally important this business is achieved! Your partner deposits baby on your lap and heads out of the room. Do you sit baby on your knee and try to type, put baby down to play next to you or call your partner back?',
    options: [
      {
        buttonText: 'Put Baby On Knee',
        failureMessage: 'Baby is thrilled at this development. I get to help daddy do a business! But then you make the fatal error of preventing baby from typing. Baby fills its lungs with air and bellows to the high heavens.',
        successMessage: 'Baby is thrilled at this development. I get to help daddy do a business! You decide that keeping baby happy is more important than your job, and between you fire off the following: "Dekr akrwAAAAAAA##ª   AIwriahjting to JJJJJJAASKLFdkso sodijwfrikloåªºøπ^^∆ørperporotreptoreprtreprotreprreport@%, KKKKKKKKKKKKKKKKKKKKin gar". This is winning.',
      },
      {
        buttonText: 'Put Baby Down',
        failureMessage: 'You place baby on its super fun mat with all the singing and dancing and flashing toys. Baby pulls as hard as it can on one of the toys then, losing grip on it, slaps itself in the face. After taking a moment to register its shock at the unfairness of the world, it bursts into tears.',
        successMessage: 'You place baby on its super fun mat with all the singing and dancing and flashing toys. Whilst writing your email, you constantly talk to baby cooing "are you enjoying playing with Mr Otter? Is Mr Otter being silly? Oh what\'s that silly Mr Otter doing then?". You send the following email to your boss: "Dear silly Mr Otter, Please find attached the report you asked for concerning the triage of the GLA level 4 solution which synergises with the baby playing with silly Mr Otter. Brgds, Mr Otter". This is winning.',
      },
      {
        buttonText: 'Call Partner Back',
        failureMessage: 'You call your partner back to explain that, although you would love to help them out by taking the baby for a while, you really must get this business done. Partner hears "My time is more valuable than yours" and begins to cry. You begin to cry. Baby thinks hey this is great! and joins in.',
        successMessage: 'You call your partner back and explain that you really must get this work done but you\'ll be more than happy to take the baby afterwards. Partner silently takes the baby and your hear a phone being angrily dialled in the next room, followed by pointedly angry stage whispering. This is winning.',
      }
    ]
  }
]
