import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import XiopPunksNFT from './artifacts/contracts/XiopNFT.sol/XiopNFT.json';
import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";

const xiopPunksNFTAddress ='0x74Af55c7c369303c1003dd1Bb1B8B05D58ba4159';

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] =useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.gertSigner();
            const contract =new ethers.Contract(
                xiopPunksNFTAddress,
                XiopPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);
            }catch(err){
                console.log("error: ", err)
            }
        }
    }  
    const handleDecrement = () =>{
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount -1);
    };

    const handleIncrement = () =>{
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };
    
    return (
        <Flex justify="center" align="center" height="60vh" paddingBottom ="100px">
           <Box width="500px"> 
            <div>
                <Text fontSize={"48px"} textShadow = "0 5px #000000">XiopPunks</Text>
                <Text
                    fontSize="16px"
                    letterSpacing="-5.5%"
                    fontFamily="inherit"
                    textShadow="0 5px 5px #000000"
                >
                    It's 2022. The Xiop degens thrive amidst chaos. 
                    Will they survive this bearmarket ?
                </Text>
            </div>

                {isConnected ? (
                    <div> 
                        <Flex align="center" justify="center">
                            <Button
                                backgrondColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleDecrement}
                            >
                                -
                            </Button>
                            <Input 
                                readOnly 
                                fontFamily="inherit"
                                width="100px"
                                height="40px"
                                textAlign="center"
                                paddingLeft="19px"
                                marginTop="10px"
                                type="number"
                                value={mintAmount} 
                            />
                            <Button 
                                backgrondColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleIncrement}
                            >
                                +
                            </Button>
                        </Flex>
                        <Button     
                            backgrondColor="#D6517D"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            marginTop="10px"
                            onClick={handleMint}
                        >
                            MINT NOW
                        </Button>
                    </div>
                ) : (
                    <Text
                        marginTop="70px"
                        fontSize="15px"
                        letterSpacing="-5.5%"
                        fontFamily="inherit"
                        textShadow="0 3px #000000"
                        color="#D6517D"
                    >
                        Please connect WALLET to mint.
                    </Text>
                )}
          </Box>
        </Flex>
    );
};
export default MainMint;