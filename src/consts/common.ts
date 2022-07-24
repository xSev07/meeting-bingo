export const phrases: Array<string> = [
    '* Animal noises in the background *',
    '* Child noises in the background *',
    'Who just joined?',
    'Can everyone go on mute?',
    'Sorry, something with my calendar',
    'Do you see my screen?',
    'Hello, hello?',
    'I\'ll have to get back to you',
    'I need to jump in another call',
    'Sorry, I was on mute',
    'Can you repeat, please?',
    'You will send the minutes?',
    'Is ____ on the call?',
    'Sorry, I had problems logging in',
    'Could you please get closer to the mic?',
    'Could you share these slides afterwards?',
    '* Load painful echo / feedback *',
    'I was having connection issues',
    'Lets wait for ____!',
    'Next slide, please',
    'Can we take this offline?',
    'Can somebody grant presenter rights?',
    'Can you email that to everyone?',
    'Sorry, I didn\'t found the conference id',
];

export const MATRIX_SIZE = Math.floor(Math.sqrt(phrases.length + 1));
export const MATRIX_CENTER = Math.floor(MATRIX_SIZE / 2);