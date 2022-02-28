import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  HStack,
  Stack,
} from "native-base";
import COLORS from "../colors/colors";
import { useContext, useEffect } from "react";
import { getProductDetails, clearDetails } from "../actions/ProductsAction";
import { ProductsContext } from "../context/";
 

const Example = ({ route }) => {
  const { state, dispatch } = useContext(ProductsContext);

  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getProductDetails(route.params.id));
    };
    resolveAction();
    return () => {
      dispatch(clearDetails());
    };
  }, []);
  if (state.details.id)
    return (
      <Box alignItems="center">
        <Box
          marginTop={20}
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="50%"  ratio={16 / 9}>
              <Image
              width="50%" 


              padding={5}
                source={{
                  uri: state.details.image,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                Price:{state.details.price} EGP
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: COLORS.Red,
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400">{state.details.description}</Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
             
            </HStack>
          </Stack>
        </Box>
      </Box>
    );
  return (
      
   <></>
  );
};

export default Example;
