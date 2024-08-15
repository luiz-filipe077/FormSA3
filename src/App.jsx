import * as C from "@chakra-ui/react"
import { color } from "framer-motion"
import { useState } from "react"
import Step from "./components/Step"
import FormPessoal from "./Pages/FormPessoal"
import FormEndereco from "./Pages/FormEndereco"
import FormProjeto from "./Pages/FormProjeto"



function App() {
  const [step, setStep]= useState(1)
  const Steps = [1,2,3]
  
  const getStep = () => {

    switch(step){
      case 1:
        return <FormPessoal/>
      case 2:
        return <FormEndereco/>
      case 3:
        return <FormProjeto/>
      default:
        return<FormPessoal/>
    }

  }
  
  return (
    <C.Flex h="100vh" align="center" justify="center">
    
    <C.Center maxW={500} w="100%" py={10} px={3} flexDirection="column" border="4px" borderColor="yellow" color="greenyellow">
    
    <C.HStack spacing={4}>
      {Steps.map((item) =>(
        <Step key={item} index={item} active={step===item}/>
      ))}
      
    </C.HStack>  
    
    <C.Divider my={4} borderColor={"black.500"}>
    
    
    </C.Divider>    
    
    <C.Box w="80%">{getStep()}</C.Box>   


    <C.HStack mt={4} spacing={10}>

    <C.Button bg="gray.200" 
      onClick={() => step !==1 && setStep(step-1) }
      disable={step===1}> Voltar

    </C.Button>
      
      
      <h1>{step}</h1>


    <C.Button bg="green" onClick={() => step !==3 && setStep(step+1)}
      > {step === 3 ? "Enviar": "Próximo"}
    </C.Button>

    </C.HStack>
      
    </C.Center>

    </C.Flex>


  )
}

export default App
