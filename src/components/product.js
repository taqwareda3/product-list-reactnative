import { Text,Box, HStack, VStack, ArrowForwardIcon } from"native-base"
const Product = ({item,navigation})=>{
    if(item.id){
        return (<Box>
            <HStack style={{justifyContent:'space-between',margin:5}}>
                <VStack>
                    <Text>
                    <Text style={{fontWeight:'bold'}}>
                            
                            Name:
                            </Text>
                        {item.title}
                    </Text>
                    <Text>
                        <Text style={{fontWeight:'bold'}}>
                            
                        Category:
                            </Text>
                        {item.category}
                    </Text>
                </VStack>
                <ArrowForwardIcon onPress ={()=>{
                    navigation.navigate({name:'details',params:{
                        id:item.id
                    }})
                }}/>
            </HStack>
        </Box>)
    }
    return <Text>Not found</Text>
}
export default Product;