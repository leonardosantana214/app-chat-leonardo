import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
    return (
        <C.Container>
            <MdMessage />
            <C.Title>Cyan<b>Chat</b></C.Title>
            <C.Info>
                <p>
                    Você ainda não tem nenhuma conversa.
                </p>
            </C.Info>
        </C.Container>
    );
};

export default Default;