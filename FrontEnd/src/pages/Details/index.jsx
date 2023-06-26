import { Container , Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import{ Header} from '../../components/Header';
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";






export  function Details(){
  
  
  
  return(
    <Container>
      <Header/>

      <main>

        <Content>

          
       

<ButtonText title="Excluir Nota"/>

<h1>Introdução ao React</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor possimus, recusandae accusantium voluptatem aperiam veniam? Dicta quaerat quo, nesciunt, numquam consequuntur dolorum dolorem velit ullam tempore ipsum itaque voluptatem.</p>


    <Section title="Links Uteis">
      <Links>
        <li> <a href="">link 1 </a></li>
      </Links>

    </Section>

    <Section title="Marcadores">
     
     <Tag title="express"/>
     <Tag title= "node"/>
      
  </Section>
    

    <Button title = "Entrar" />

    </Content>
      </main>

    </Container>
    
  )
}