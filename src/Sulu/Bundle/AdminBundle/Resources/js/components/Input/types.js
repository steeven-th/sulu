// @flow
import type {ElementRef} from 'react';

export type InputProps<T: ?string | ?number> = {|
    alignment?: 'left' | 'center' | 'right',
    autocomplete?: string,
    autoFocus?: boolean,
    collapsed?: boolean,
    disabled: boolean,
    headline?: boolean,
    icon?: string,
    iconClassName?: string,
    iconStyle?: Object,
    id?: string,
    inputClass?: string,
    inputContainerRef?: (ref: ?ElementRef<*>) => void,
    inputMode?: string,
    inputRef?: (ref: ?ElementRef<'input'>) => void,
    loading?: boolean,
    max?: ?T,
    maxCharacters?: number,
    maxSegments?: number,
    min?: ?T,
    name?: string,
    onBlur?: () => void,
    onChange: (value: ?string, event: SyntheticEvent<HTMLInputElement>) => void,
    onClearClick?: () => void,
    onFocus?: (event: Event) => void,
    onIconClick?: () => void,
    onKeyPress?: (key: ?string, event: SyntheticKeyboardEvent<HTMLInputElement>) => void,
    placeholder?: string,
    segmentDelimiter?: string,
    skin?: 'default' | 'dark',
    step?: ?T,
    type?: string,
    valid: boolean,
    value: ?T,
|};
