import * as C from "@chakra-ui/react"
import { Radio, RadioGroup } from '@chakra-ui/react'



const FormPessoal = () => {
    return(
        <C.VStack>
            <h1>Form Pessoal</h1>
            <Radio direction='row' >M</Radio>
            <Radio direction='row'>F</Radio>
            <C.Input type="text" placeholder="Nome"/>
            <C.Input type="text" placeholder="CPF"/>
            <C.Input type="email" placeholder="Email"/>
        </C.VStack>

    )
}



export default FormPessoal