import "./beauty.css"
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  Button,
  CheckboxGroup,
  VStack,
  Checkbox
} from '@chakra-ui/react';


import { useDispatch, useSelector} from "react-redux"
import { getData } from "../../Redux/PagesRedux/action";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';


export default function BeautyProducts() {
  const beautyData=useSelector((state)=>state.products.products)
  const [SearchParams,setSearchParams]=useSearchParams()
  const [filterData,setFilterData]=useState(SearchParams.getAll("type")||[])
  const dispatch=useDispatch()

  const handleFilter=(value)=>{
    setFilterData(value)
    // console.log(filterData);
    console.log(value);
  }
  

  useEffect(()=>{
    setSearchParams({type:filterData})
    let mainParams={type:SearchParams.getAll("type")}
    dispatch(getData(mainParams))
  },[filterData,SearchParams,dispatch,setSearchParams])
  return (
    <>
      
      <Box textAlign={"left"} marginLeft={"20%"}>
        <Heading>Designer Beauty</Heading>
        <Text fontWeight={500} marginTop={6}>Designer beauty with price comparison across 500+ stores in one place. Discover the latest designer beauty at ModeSens</Text>
      </Box>
      {/* <Flex justifyContent={"center"} marginTop={10}>
        <Button disabled={page===1} onClick={()=>setPage(page-1)}>prev</Button>
        <Text>page-{page}</Text>
        <Button onClick={()=>setPage(page+1)}>Next</Button>
      </Flex> */}
      <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}} >
          <Box width='20%'>
          <Box >
       <Box >
        <Box >
            <Text marginLeft={"-44%"} fontWeight={"400"} marginBottom={1} marginTop={"10%"}>10,000+ ITEMS</Text>
            <Text marginBottom={1} fontSize="18px" marginLeft={"-50%"} fontWeight={"500"}>Filter By:</Text>
            <CheckboxGroup colorScheme='green' defaultValue={filterData} onChange={handleFilter} >
              <VStack alignItems={"baseline"} marginLeft={"18%"} >
                <Checkbox value={"mens"}>Mens' Products</Checkbox>
                < Checkbox value={"womens"}>Womens' Products</Checkbox>
                <Checkbox value={"kids"} >Kids Products</Checkbox>
              </VStack>
            </CheckboxGroup>
            <Button colorScheme='#000' backgroundColor={"black"} marginTop={10} marginLeft={"-20%"} width={"50%"}>Save My Search</Button>
        </Box>
       </Box>
       <Box textAlign={"left"} marginLeft={"18%"} marginTop={10} lineHeight={8}>
          <Text fontWeight={"bold"} textAlign={"left"}>Related Category Women</Text>
          <Text textAlign={"left"}>Beauty Sale</Text>
          <Text textAlign={"left"}>Beauty</Text>
          <Text textAlign={"left"}>Home</Text>
          <Text textAlign={"left"}>Accessories</Text>
          <Text textAlign={"left"}>Bags</Text>
          <Text textAlign={"left"}>Clothing</Text>
          <Text textAlign={"left"}>Shoes</Text>
       </Box>
       <Box textAlign={"left"} marginLeft={"18%"} marginTop={10} lineHeight={8}>
          <Text fontWeight={"bold"} textAlign={"left"}>Related Category Women</Text>
          <Text textAlign={"left"}>Grooming Sale</Text>
          <Text textAlign={"left"}>Grooming</Text>
          <Text textAlign={"left"}>Home</Text>
          <Text textAlign={"left"}>Accessories</Text>
          <Text textAlign={"left"}>Bags</Text>
          <Text textAlign={"left"}>Clothing</Text>
          <Text textAlign={"left"}>Shoes</Text>
       </Box>
       <Box textAlign={"left"} marginLeft={"18%"} marginTop={10} lineHeight={8}>
          <Text fontWeight={"bold"} textAlign={"left"}>Related Category Kids</Text>
          <Text textAlign={"left"}>Care Sale</Text>
          <Text textAlign={"left"}>Care</Text>
          <Text textAlign={"left"}>Home</Text>
          <Text textAlign={"left"}>Accessories</Text>
          <Text textAlign={"left"}>Bags</Text>
          <Text textAlign={"left"}>Clothing</Text>
          <Text textAlign={"left"}>Shoes</Text>
       </Box>
      </Box>
          </Box>
          <Box width='80%'>
              {/* <Heading as="h3" textAlign="center" fontSize={'3xl'}>ALL Products</Heading> */}              
              <Grid  display="grid" gridTemplateColumns="repeat(4,1fr)"  >
                  {beautyData?.map((item)=>( 
                      <ProductSimple  Id={item._id} image={item.url} name={item.name}  line={item.desc} price={item.price}/>
                  ))}
              </Grid>
          </Box>
        </Stack>
      </Box>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
    )
};
 function ProductSimple({Id,image,name,line,price}) {
  return (
    <Center py={12} >
      <Box  
      key={Id}
        role={'group'}
        p={6}
        maxW={'280px'}
        height={"auto"}
        w={'full'}
        bg={useColorModeValue('white', 'gray.1000')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        >
        <Box 
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(1px)',
            zIndex: 1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}  >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
             boxShadow={'2xl'}
            src={image}
           
           />
        </Box>
        <Stack pt={2} align={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'sans-serif'} fontWeight={500} color={'GrayText.400'} marginTop={10}>
          {name}
          </Heading>
          <Text  fontSize={'m'} textTransform={'lowercase'}color={'GrayText'}>
            {line}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={500} fontSize={'xl'}>
             $20 - ${price}
            </Text>
          </Stack>
          <Link to={`/ProductPage/${Id}`} style={{textDecoration:"none" ,color:"CaptionText"}}>
          <Button colorScheme='teal' variant='outline' width={200}  className="QuickView">
            Quick View
          </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}