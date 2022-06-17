import axios from 'axios'
import React, {useState, useEffect, useRef,useMemo,useCallback  } from 'react'
// import Editor from '../../components/Editor'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'

import FormContainer from '../components/FormContainer'
import { createCourse } from '../actions/courseActions'
import { getTagsAction } from '../actions/tagActions'

import JoditEditor from "jodit-react";

import {COURSE_CREATE_RESET} from '../constants/courseConstants'



const NewCourseScreen = ({ location, history }) => {
    const [body, settext] = useState('')
    const [title, settitle] = useState('')
    const [category, setcategory] = useState('62ac8a75e1b4a62e1468f066')

    const [uploading,setUploading]= useState(false)
    const [image, setphoto] = useState('')
    const [tag, setTag] = useState([])
    const [description, setdescription] = useState('')
    const [price,setprice] = useState('')
    
    const postCreate = useSelector((state) => state.postCreate)
    const readTags = useSelector((state)=>state.readTags)


    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct,
    } = postCreate


    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }


    const dispatch = useDispatch()



    const redirect = location.search ? location.search.split('=')[1] : '/'


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const user = userInfo._id

    useEffect(() => {
        dispatch(getTagsAction())
        dispatch({type:COURSE_CREATE_RESET})
        if (!userInfo){
            history.push('/login')
        }
        if (successCreate){
            history.push(`/`)
        }

    }, [dispatch,history, userInfo,redirect,successCreate])

    const uploadFileHandler = async (e) => {

        const file = e.target.files[0]


        const formData = new FormData()
        formData.append('image', file)
        console.log(formData)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('/api/upload', formData, config)
            setphoto(data)

            setUploading(false)

        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const s = {
        body,title,image,description,user,category
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(s)
            dispatch(createCourse(s))
           
           
            setTimeout(() => { 
                history.push('/');
              }, 5000)
    }


const  handleChange=(e)=> {

        const selected=[];
        let selectedOption=(e.target.selectedOptions);

        for (let i = 0; i < selectedOption.length; i++){
            selected.push(selectedOption.item(i).value)
        }
        setTag(selected)
    }

 
    

    return (
        <div>

        {/* <button onClick={notify}>Notify!</button> */}
      
      
        <Row >
            <Col xs={12} md={12}>
        <FormContainer>
            <h1>New Course</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Title'
                        value={title}
                        required
                        onChange={(e) => settitle(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='name'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Description'
                        required

                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='name'>
                    <Form.Label>Price in USD</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter Price'
                        required

                        value={description}
                        onChange={(e) => setprice(e.target.value)}
                    ></Form.Control>
                </Form.Group>


                <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                    <Form.File id='image-file' label='Choose File'
                    custom
                    required
                               onChange={uploadFileHandler}
                    ></Form.File>
                    {uploading && <Loader/>}


                </Form.Group>


                {/* <Form.Group controlId='image'>
                    <Form.Label>Tags <br/> </Form.Label>

                    <select multiple onChange={handleChange.bind(this)} required >
                        {
                            tags.map(item => (
                                <option value={item?._id}>{item.name}</option>
                            ))
                        }
                    </select>
                </Form.Group> */}

                {/* <Editor
                    name={body}
                    onTextChange={(pr)=> settext(pr)} /> */}

                <Button type='submit' variant='primary'>
                    ADD
                </Button>
            </Form>


        </FormContainer>
            </Col>
         
        </Row>
        </div>

                )
}

const Editor = ({ text, onTextChange  }) => {
    const editor = useRef(null)
    const [p,setp] = useState('')
    const config = {}


    const handleInputChange = useCallback(x => {

        setp(x)
        onTextChange(x)
    }, [onTextChange(p)])


    return useMemo( () => (
        <JoditEditor ref={editor}  config={config}  onChange={handleInputChange} value={text}  />

    ), [] )
}

export default NewCourseScreen
