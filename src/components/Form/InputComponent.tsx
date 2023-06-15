import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";

import { GroupInput, Input, InputLabel } from "../../styles/components/Form";

export interface LoginProps {
    email: string;
    password: string;
}

interface InputProps {
    type: string;
    name: string;
    updateState: Dispatch<SetStateAction<LoginProps>>;
    state: string;
    pattern: string;
    placeholder: string;
    label:string;
}

export const InputComponent = ({
    type,
    name,
    state,
    updateState,
    pattern,
    placeholder,
    label
}: InputProps) => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        updateState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    useEffect(() => {
        const regex = pattern as unknown as RegExp;
        if (!state) setIsValid(true);
        else setIsValid(regex.test(state));
    }, [state]);
    console.log(isValid)
    return (
        <>
            <GroupInput>
                <Input
                    type={type}
                    name={name}
                    onChange={handleChange}
                    pattern={pattern}
                    value={state}
                    isValid={isValid}
                    placeholder={placeholder}
                    />
                <InputLabel>{label}</InputLabel>
            </GroupInput>
        </>
    );
};
