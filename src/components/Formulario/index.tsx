import { useToggleDisplayState } from "../../context/useToggleDisplay";
import React, { useState } from "react";
import { NewWrapper, NewButton, Form } from "./styles";
import { Link, Titulo } from "../UseState&props/styles";


export function Formulario() {
	const {display} = useToggleDisplayState();
	const [text, setText] = useState("sonic");
	const [nome, setNome] = useState("sonic");
    
	function trocaTitulo(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setNome(text);
	}
    
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setText(event.target.value);
	}
    
	return (
		<>
			{display ?
				<NewWrapper>
					<Link id="secao3"></Link>
					<Titulo data-aos="fade-right">Formulário.</Titulo>
					<Form data-aos="fade-right" onSubmit={trocaTitulo}>
						<h1>Boas vindas {nome}</h1>
						<input
							type="text"
							value={text}
							maxLength={20}
							onChange={(event) => {
								handleChange(event);
							}}
							placeholder="Digite o título da página"
							required
						/>
						<NewButton type="submit">Trocar titulo</NewButton>
					</Form>
				</NewWrapper>
				: null}
		</>
	);
}
