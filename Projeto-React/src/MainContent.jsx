import '../src/css/MainContent.css'
import Section from "./Section"

function MainContent (){
    return (
        <main className="sessao">
            <Section title='Sobre nós'>
                <p>Disciplina de Desenvolvimento Web 2</p>
            </Section>
            <Section title='Professor'>
                <p>Professor Leandro Ensina</p>
            </Section>

        </main>
    )

}

export default MainContent