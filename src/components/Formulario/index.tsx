import { useToggleDisplayState } from "../../context/useToggleDisplay";
import React, { useState } from "react";
import { NewWrapper, NewButton, Form } from "./styles";
import { Link, Titulo } from "../UseState&props/styles";


export function Formulario(testDisplay) {
	const {display} = useToggleDisplayState();

	interface ICadastroFormulario{
		nome: string;
		email: string;
		idade: number;
		aceitaNovidadesPorEmail: boolean;
	}

	const [textoH2, setTextoH2] = useState<string>("sonic");
	const [nome, setNome] = useState<string>("sonic");
	const [email, setEmail] = useState<string>("");
	const [idade, setIdade] = useState<number>(1);
	const [aceitaNovidadesPorEmail, setAceitaNovidadesPorEmail] = useState<boolean>(true);

	function submitForm(event: React.FormEvent<HTMLFormElement>) {
		// Evita que o comportamento padrão de refresh do formulário no browser seja executado
		event.preventDefault();
		// Cria um objeto com os dados do formulário
		const dados : ICadastroFormulario = {
			nome: nome,
			email: email,
			idade: idade,
			aceitaNovidadesPorEmail: aceitaNovidadesPorEmail
		};
		// Recupera os dados da Local Storage
		let local : string | null | ICadastroFormulario[] = localStorage.getItem("submitsFormulario");
		// Aqui o intuito é ter uma array com objetos JS na local storage ao fim do processo
		if(local === null ){ // Caso 1 -> não há dados na local storage, então cria uma array vazia para adicionar os dados
			local = [];
		}
		else if(typeof local === "string"){  // Caso 2 -> Já existem dados na local storage, transformar esses dados (salvos em string) para um objeto javascript
			local = JSON.parse(local);
		}
		
		if(Array.isArray(local)){ // Verificação pro typescript não chorar
			local.push(dados); // Inserir dados novos na array
		}
		localStorage.setItem("submitsFormulario", JSON.stringify(local)); // Inserir array de dados no local storage em formato de string
		// Seta os campos do formulário para o padrão novamente
		setTextoH2(nome);
		setNome("");
		setEmail("");
		setIdade(1);
		setAceitaNovidadesPorEmail(true);
	}
    
	return (
		<>
			{display || testDisplay ?
				<NewWrapper role="section">
					<Link id="secao3"></Link>
					<Titulo data-aos="fade-right">Formulário.</Titulo>
					<Form data-aos="fade-right" onSubmit={submitForm} role="form">
						<h2 data-testid="FormTitle">Boas vindas {textoH2}</h2>
						<input
							type="text"
							value={nome}
							maxLength={20}
							onChange={(event) => {
								setNome(event.target.value);
							}}
							placeholder="Digite o nome"
							required
						/>
						<input
							type="text"
							value={email}
							maxLength={40}
							onChange={(event) => {
								setEmail(event.target.value);
							}}
							placeholder="Digite o e-mail"
							required
						/>
						<input
							type="number"
							value={idade}
							step={1}
							min={1}
							max={130}
							onChange={(event) => {
								setIdade(Number(event.target.value));
							}}
							placeholder="Digite a idade"
							required
						/>
						<label htmlFor="novidadesPorEmail">
							<input
								id="novidadesPorEmail"
								name="novidadesPorEmail"
								type="checkbox"
								checked={aceitaNovidadesPorEmail}
								onChange={() => {
									setAceitaNovidadesPorEmail(!aceitaNovidadesPorEmail);
								}}
							/>
							Novidades por email?
						</label>
						<NewButton type="submit">Enviar</NewButton>
					</Form>
				</NewWrapper>
				: null}
		</>
	);
}
