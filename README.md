# worldtrip

Come with to meet the most visited cities in the world!

<div align="center">

  ![image](https://user-images.githubusercontent.com/62719629/157969968-e517cf6a-c4b5-4832-854e-73580147b588.png)
  
</div>

### Objective
This website was created as a training exercise for React framework, along with Typescript, Next.js, Chakra-ui and the use of Prismic API.<br/>
It's goal as a study case was to focus on the use declarative styles, in that case Chakra-ui, and page responsiveness, having its stylization adapted for mobiles as well. 

<div style="display: flex">
  <img src="https://user-images.githubusercontent.com/62719629/157968449-ea80bc09-898c-4d81-9029-715dce088962.png" />
</div>

### Chakra-ui usage
Chakra-ui's objective is to be a declarative slyling framework for React. All HTML tags are transformed in components, and it can have its styling as component properties. As an example, here's the Header component (without back arrow):

```HTML
<Flex
  w="100%"
  h={[50, 100]}
  bg="white"
  alignItems="center"
  justifyContent="center"
>
  <Link href="/" passHref>
   <Box as="span" cursor="pointer">
         <!-- imgHeight is variable, depending of window width -->
         <Image src={ Logo } height={ imgHeight } alt="Worldtrip" />
   </Box>
  </Link>
</Flex>
```

This would be like this is normal HTML / CSS:

```HTML
<div class="header">
  <a href="/" class="headerImage">
   <img src="./src/logo.svg" />
  </a>
</div>
```
```CSS
.header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100px; /* 100px is only for web mode. Responsive design would require 50px for mobile mode */
}
```

If you want to know more about Chakra-ui:<br/>
https://chakra-ui.com/

Besides "normal" components, some special components were used from Chakra, like Tooltip, and Fade:<br/>
**Tooltip**
```
<Tooltip 
    hasArrow
    bg='gray.600' 
    label='Cidades entre às 100 cidades mais visitadas do mundo' 
    placement='right'
>
    <Box as="span">
        <Icon as={ FiInfo } fontSize="20" color="gray.400" opacity="50%" />
    </Box>
</Tooltip>
```
<img src="https://user-images.githubusercontent.com/62719629/157975677-f15754a4-7531-4664-a33a-d1e91cfe2866.png" width="400px" />

Tooltip for extra info in continent page. It's info comes from the label property

**Fade**
```
 <Fade in={ isOpen } onClick={ onClose }>
    <Link href='/' passHref>
        <FiChevronLeft 
            size={ arrowSize }
            color="#47585B"
            strokeWidth={2}
        />
    </Link>
</Fade>
```
<div style="display: flex;" align="center" justify="center">
<img src="https://user-images.githubusercontent.com/62719629/157975831-fe53156e-076b-42d2-9489-138cb3f0887f.png" /> <br/> Fade component is used to get arrow a fade out effect when clicked
</div>

### Swiper
Swiper is used for Continent banner slider:

<img src="https://media.giphy.com/media/jaBU9IIsHwRg0mcfa4/giphy.gif" />    


### Prismic
Prismic is used as a database for continents and cities throughout the website. It helps, along with Next.js, to dynamically generate the continent page, using each document uid as a slug for Next.

![image](https://user-images.githubusercontent.com/62719629/157978869-0cb9790f-b3a7-4db5-bd99-b593e3f4f938.png)

![image](https://user-images.githubusercontent.com/62719629/157979008-737ef5b7-c2c7-4c36-a46e-974a112a2231.png)

