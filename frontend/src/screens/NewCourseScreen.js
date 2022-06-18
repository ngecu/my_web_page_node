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
// import { getTagsAction } from '../actions/tagActions'
import { listCategories } from '../actions/categoryActions'

import JoditEditor from "jodit-react";

import {COURSE_CREATE_RESET} from '../constants/courseConstants'


const NewCourseScreen = ({ location, history }) => {
    const [name, setname] = useState('')
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('')

    const [description, setdescription] = useState('')
    const [price,setprice] = useState('')

    const [uploading,setUploading]= useState(false)
   
    const courseCreate = useSelector((state) => state.courseCreate)
    const readCategories = useSelector((state)=>state.readCategories)

    const categoryList = useSelector((state) => state.categoryList)
    const { loading_category, error_category, categories } = categoryList
  
    const {
        loading: loadingCategries,
        error: errorCreate,
        success: successCreate,
        product: createdCourse,
    } = courseCreate

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
        dispatch(listCategories())
        // setcategory(categories[0]._id)
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
            setimage(data)

            setUploading(false)

        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const reviews = {
        name:"Robinson Ngecu",
        rating:5,
        comment:"Very Dope",
        user
    }

    const s = {
       user,name,image,category,description,price,reviews
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(s)
            if(dispatch(createCourse(s))){
                    history.push('/');
            }
    }


const  handleChange=(e)=> {

        const selected=[];
        let selectedOption=(e.target.selectedOptions);

        for (let i = 0; i < selectedOption.length; i++){
            selected.push(selectedOption.item(i).value)
        }
        console.log(selected)
        setcategory(selected)
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
                        value={name}
                        required
                        onChange={(e) => setname(e.target.value)}
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

                        value={price}
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


                <Form.Group controlId='image'>
                    <Form.Label>Tags <br/> </Form.Label>

                    <select  onChange={handleChange.bind(this)} required >
                        {
                            categories.map(item => (
                                <option value={item?._id}>{item.name}</option>
                            ))
                        }
                    </select>
                </Form.Group>

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
