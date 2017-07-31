const userAgent = window.navigator.userAgent.toLocaleLowerCase();

export const isIpad = (/ipad/i).test(userAgent);
export const isIphone = (/iphone os/i).test(userAgent);

export const isMobile = (/(iphone|ipad|ipod|android|ios)/i).test(userAgent);
