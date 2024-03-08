import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePic from '../profilePic/ProfilePic';
import styles from '../jumbotron/Jumbotron.module.css'
import ButtonIcon from '../buttonIcon/ButtonIcon';
import Headings from '../headings/Headings';
import CustomButton from '../button/Button';
import LinkJumbotron from '../link/LinkJumbotron';

const Jumbotron = ({profile}) => {
    console.log(profile);
  return (
    <>
        <Container>
            <Row> 
                <Col 
                    className= {styles.cover}>
                    <ProfilePic
                        width={'100px'}
                        src={`${profile.image}`}
                    />
                    <div >
                        <ButtonIcon 
                            iconName="FaCamera"/> 
                    </div>  
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end pt-2'>
                    <ButtonIcon iconName="LuPencil"/>   
                </Col>
            </Row>
            <Row>
                <Col className= 'col-12 col-md-6 col-lg-8 d-flex'>
                    <Row>
                        <Col 
                            xs={12}
                            className='d-flex'>
                            <Headings variant={'h2'} text={`${profile.name}  ${profile.surname}`}/>
                            <CustomButton 
                                className={'buttonIcon'}
                                variant={'outlinedBlue'} 
                                text={`Verifica ora`}
                                iconName = {'MdOutlineVerifiedUser'}
                            />
                        </Col>
                        <Col xs={12}>
                            <Headings 
                                variant={'p'} 
                                text={`${profile.bio}`}
                            />
                        </Col>
                        <Col xs ={12} className='d-flex align-items-center'>
                            <Headings
                                variant={'p'}
                                text={`${profile.area}`}
                            />
                            <p className='ps-2 m-0'><LinkJumbotron text={'Informazioni di contatto'}/></p>
                        </Col>
                        <Col xs={12}>
                            <p className='ps-2 m-0'><LinkJumbotron text={`${profile.username}`}/></p>
                        </Col>
                        <Col>
                            <CustomButton variant={'filledBlue'} text={'Disponibile per'}/>
                            <CustomButton variant={'outlinedBlue'} text={'Aggiungi sezione del profilo'}/>
                            <CustomButton variant={'outlinedGrey'} text={'Altro'}/>
                        </Col>
                    </Row>
                </Col>
                <Col className='d-none d-md-block col-md-6 col-lg-4' >
                    <ul>
                        <li>Esperienza 1</li>
                        <li>Esperienza 2</li>
                    </ul>
                </Col>
            </Row>
            <Row>
            <Col xs={12}>
                    <Row className='gap-1'>
                        <Col className='border rounded-border-secondary rounded' xs={5}>
                            <Headings
                                variant={'h2'}
                                text={'Bo'}
                            />
                            <Headings
                                variant={'p'}
                                text={'bobo'}
                            />
                            <LinkJumbotron
                                text={'Mostra dettagli'}
                            />
                        </Col>
                        <Col className='border rounded-border-secondary rounded' xs={5}>
                        <Headings
                                variant={'h2'}
                                text={'Bo'}
                            />
                            <Headings
                                variant={'p'}
                                text={'bobo'}
                            />
                            <LinkJumbotron
                                text={'Mostra dettagli'}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Jumbotron;
