import {HStack,Text, VStack} from 'native-base';
import { useContext, useEffect } from 'react';
import { getProductDetails,clearDetails } from '../actions/ProductsAction';
import { UsersContext } from '../context';

const  Details = ({route})=>{
    const {state,dispatch} = useContext(UsersContext)
    console.log(state)
    useEffect(()=>{
        const resolveAction = async () => {
            dispatch(await getProductDetails(route.params.id));
          };
          resolveAction();
        return ()=>{
            dispatch(clearDetails())
        }
    },[])
    if(state.details.id)
    return <VStack style={{margin:10}}>
        <HStack style={{
            borderBottomWidth:2,
            borderBottomColor:'black',
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Name:
            </Text>
            <Text>
              { state.details.title }
            </Text>
        </HStack>
        <HStack style={{
            borderBottomWidth:2,
            borderBottomColor:'black',
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Email:
            </Text>
            <Text>
              { state.details.email }
            </Text>
        </HStack>
        <HStack style={{
            borderBottomWidth:2,
            borderBottomColor:'black',
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Phone:
            </Text>
            <Text>
              { state.details.phone }
            </Text>
        </HStack>
        <HStack style={{
            borderBottomWidth:2,
            borderBottomColor:'black',
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Website:
            </Text>
            <Text>
              { state.details.website }
            </Text>
        </HStack>
        <HStack 
        style={{
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Bio:
            </Text>
            <Text>
                {state.details.description }
            </Text>
        </HStack>
    </VStack>
    return <Text>Loading...</Text>
}

export default Details;