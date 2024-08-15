import * as C from "@chakra-ui/react"

const FormEndereco = () => {
    return(
        <C.VStack>
            <h1>Form Endereço</h1>
            <C.Input type="text" placeholder="CEP"/>
            <C.Input type="text" placeholder="Bairro"/>
            <C.Input type="text" placeholder="Cidade"/>
            <C.Input type="text" placeholder="UF"/>
        </C.VStack>

    )
}





export default FormEndereco