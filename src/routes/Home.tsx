import { Text, Box, Image} from '@chakra-ui/react';
import coffeBreakLight from '../images/coffe-break-light.jpg'
import sketchupIcon from '../images/sketchup-icon.jpg'
import cliente from '../images/cliente.jpg'



const Home = () => {
    return (
        <>
            <Box bgColor={'#eeeeee'} fontFamily={"Montserrat, sans-serif"}>
                <Box
                    zIndex={0}
                    position={'sticky'}
                    w="100%"
                    h="400px"
                    filter={"brightness(0.9) contrast(1) saturate(1.2)"}
                    backgroundImage={`url(${coffeBreakLight})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                </Box>
                <Box className='conteudo' marginLeft={"10vw"} marginRight={"10vw"} textAlign={"justify"}>
                    <Box padding={"10px"} marginTop="40px" fontSize={"40"} fontWeight={"bold"} position={"relative"}>
                        Sobre mim:
                    </Box>
                    <Box marginTop="20px" display="flex" justifyContent="center">
                        <Box textAlign="center" w="50%" padding={"10px"} pt="20px">
                            <Box pb="20px" borderBottom={"solid 1px black"}>
                                <Text fontWeight={"bold"}>Janaina Oliveira Vilarino</Text>
                                <Text> Estudante de arquitetura - 7º periodo </Text>
                            </Box>
                            <Box pb="20px" borderBottom={"solid 1px black"} pt="20px">
                                <Text  pb="10px">Skills:</Text>
                                <Image pl="5px" w="50px" src={"https://seeklogo.com/images/A/autocad-logo-69326D7728-seeklogo.com.png"} alt='Dan Abramov' />
                                <Image pl="5px" w="50px" src={"https://www.cadlinecommunity.co.uk/hc/article_attachments/5338730622109/autodesk-revit-product-icon-128_2x.png"} alt='Dan Abramov' />
                                <Image pl="5px" w="50px" src={sketchupIcon} alt='Dan Abramov' />
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center"w="50%" padding={"10px"}>
                            <Image border={"solid 2px black"} borderRadius={"100px"} w="200px" src={cliente} alt='Dan Abramov' />
                        </Box>
                    </Box>

                    <Box padding={"10px"} marginTop="50px" fontSize={"40"} fontWeight={"bold"} position={"relative"}>
                        Projetos:
                    </Box>

                    <Box padding={"10px"} marginTop="50px" fontSize={"40"} fontWeight={"bold"} position={"relative"}>
                        Projetos:
                    </Box>
                </Box>
            </Box>
            
        </>
        
    )
}

export default Home;