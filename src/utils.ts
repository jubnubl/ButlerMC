export const sleep = (ms: number): Promise<NodeJS.Timeout> =>
    new Promise(resolve => setTimeout(resolve, ms)); // fixed 'resovle' typo

export const getRandom = <T>(arr: T[]): T =>
    arr[Math.floor(Math.random() * arr.length)];
