import * as C from "@chakra-ui/react"

const FormProjeto = () => {
    return(
        <C.VStack>
            <h1>Form Projeto</h1>
            <C.Input type="text" placeholder="Projeto"/>
            <C.Input type="text" placeholder="Área"/>
            <C.Input type="email" placeholder="Docente"/>
        </C.VStack>

    )
}



export default FormProjeto