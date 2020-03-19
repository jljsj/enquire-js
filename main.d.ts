import enquire from 'enquire.js';

// copied from @types/enquire.js
interface Options {
    /**
     * If set to true, defers execution of the setup function until the first time the media query is matched
     */
    deferSetup?: boolean;
    /**
     * If supplied, triggered when a media query matches.
     */
    match?(): void;
    /**
     * If supplied, triggered when the media query transitions from a matched state to an unmatched state.
     */
    unmatch?(): void;
    /**
     * If supplied, triggered once, when the handler is registered.
     */
    setup?(): void;

    /**
     * If supplied, triggered when handler is unregistered. Place cleanup code here
     */
    destroy?(): void;
}

type Callback = (flag?: boolean) => void;

const enquireJs = enquire;

export function enquireScreen(cb: Callback, query?: string): Options;
export function unenquireScreen(handler: Options, query?: string): void;

export default enquireJs;
