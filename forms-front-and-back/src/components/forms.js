import React from 'react'

function Forms() {

    
    const getNome = document.getElementById("nome").value;
    const getEmail = document.getElementById("email").value;
    const getSenha1 = document.getElementById("senha1").value;
    const getSenha2 = document.getElementById("senha2").value;

    const enviarLocalStorage = () => {
        if (senha1 === senha2) {
            window.localStorage.setItem('Nome', getNome);
            window.localStorage.setItem('Email', getEmail);
            window.localStorage.setItem('Senha', getSenha1);
            window.localStorage.setItem('Senha Novamente', getSenha2);
            alert('Dados Cadastrados!');
        } else {
            alert('Senha incorreta!');
        }
    };

    return (
        <div>
            <section className='Container'>
                <header>
                    <div className='balls'>
                        <div className='ball1'></div>
                        <div className='ball2'></div>
                        <div className='ball3'></div>
                    </div>

                    <h1>Formulário Cadastro</h1>
                </header>

                <main>
                    <p>Nome</p>
                    <input type='text' placeholder='Ex: Gabriel Lorenssetti' id='nome'></input>
                    <p>Email</p>
                    <input type='email' placeholder='Ex: gabriel@gmail.com' id='email'></input>
                    <p>Senha</p>
                    <input type='password' placeholder='Ex: @Gariel4905824' id='senha1'></input>
                    <p>Digite a senha novamente</p>
                    <input type='password' placeholder='Ex: @Gariel4905824' id='senha2'></input>

                    <div className='btn' onClick={enviarLocalStorage}><h2>ENVIAR</h2></div>
                </main>
            </section>
        </div>
    );


}

export default Forms;