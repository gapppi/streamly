import React, { Component , Fragment} from 'react';
import NavBar from '../NavBar/navbar';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import axios from 'axios';

var typeSelected, registrationObj;

class TopPicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            summary: '',
            imdbRating: '',
            link: '',
            releasingDate: '',
            productionCompany: '',
            numberOfSeasons: '',
            type: '',
            inputFields: [{
                name: '',
                episodeLink: '',
                episodeNumber: '',
                episodeSummary: ''
            }]
        }
    }

    selectData = (e) => {
        console.log(e.target.value);
        typeSelected = e.target.value
        this.setState({
            type: e.target.value,
        })
    }

    handleAddFields = () => {
        this.setState({
            inputFields: this.state.inputFields.concat([{ name: "", episodeLink: "", episodeNumber: "", episodeSummary: "" }])
        });
    }

    handleRemoveShareholder = idx => () => {
        this.setState({
            inputFields: this.state.inputFields.filter((s, sidx) => idx !== sidx)
        });
    };

    /**Create episodes array of  episode object */
    handleInputChange = idx => e => {
        const newInputField = [...this.state.inputFields]
        if (e.target.name === "epiName") {
            newInputField[idx].name = e.target.value;
        } else if (e.target.name === "epiLink") {
            newInputField[idx].episodeLink = e.target.value;
        } else if (e.target.name === "epiNum") {
            newInputField[idx].episodeNumber = e.target.value;
        } else {
            newInputField[idx].episodeSummary = e.target.value;
        }
        this.setState({ inputFields: newInputField },
            function () {
                console.log("Fields:", this.state.inputFields);
            });
    };

    /** Upload Image */
    saveImage = async (e) => {
        var file = e.target.files[0];
        console.log("Image: ", file);
        const formData = new FormData();
        formData.append('fileData', file);
        // formData.append('movieName', this.state.title);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        // await axios.post("http://localhost:5000/upload/topPicksForYou", formData, config)
        //     .then((response) => {
        //         alert("The file is successfully uploaded");
        //     }).catch((error) => {
        //     });
    }

       /** Submit form */
       handleSubmit = async (e) => {
        if (this.state.type === "Movie") {
            registrationObj = {
                "title": this.state.title,
                "type": this.state.type,
                "imdbRating": this.state.imdbRating,
                "link": this.state.link,
                "summary": this.state.summary,
                "releasingDate": this.state.releasingDate,
                "productionCompany": this.state.productionCompany,
            }
        } else {
            registrationObj = {
                "title": this.state.title,
                "type": this.state.type,
                "imdbRating": this.state.imdbRating,
                "link": this.state.link,
                "summary": this.state.summary,
                "releasingDate": this.state.releasingDate,
                "productionCompany": this.state.productionCompany,
                "numberOfSeasons": this.state.numberOfSeasons,
                "episodes": this.state.inputFields
            }
        }

        await axios.post('http://localhost:5000/topPicksForYou',
            registrationObj,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                console.log("Password reset code : ", res)
            })
            .catch(error => {
                console.log("Error: ", error);

            })
        console.log("Registration Obj:", registrationObj);
        e.preventDefault();
    }

    render() {
        let { inputFields } = this.state
        return (
            <div>
                <div>
                    <NavBar />
                    <div className="row">
                        <div className="col-md-3">
                            <h1></h1>
                        </div>
                        <div className="col-md-6 center" >
                            <Form style={{ marginTop: 40, marginBottom: 40 }} onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Title:  </Label>
                                    <Col sm={10}>
                                        <Input name="email" id="exampleEmail" placeholder="with a placeholder"
                                            onChange={e => {
                                                this.setState({
                                                    title: e.target.value,
                                                })
                                            }} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Summary:  </Label>
                                    <Col sm={10}>
                                        <Input name="password" id="examplePassword" placeholder="password placeholder"
                                            onChange={e => {
                                                this.setState({
                                                    summary: e.target.value,
                                                })
                                            }} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleSelect" sm={2}>Select Type:  </Label>
                                    <Col sm={10}>
                                        <Input type="select" name="select" id="exampleSelect"
                                            onChange={(e) => { this.selectData(e) }}>
                                            <option>Select</option>
                                            <option value="Movie">Movie</option>
                                            <option value="Series">Series</option>
                                            {/* <option value="Tv Show">TV Show</option> */}
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Link:  </Label>
                                    <Col sm={10}>
                                        <Input name="link" id="examplePassword" placeholder="Please enter link"
                                            onChange={e => {
                                                this.setState({
                                                    link: e.target.value,
                                                })
                                            }} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Releasing Date:  </Label>
                                    <Col sm={10}>
                                        <Input name="date" id="examplePassword" placeholder="Date of releasing"
                                            onChange={e => {
                                                this.setState({
                                                    releasingDate: e.target.value,
                                                })
                                            }} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>IMDB Rating:  </Label>
                                    <Col sm={10}>
                                        <Input name="date" id="examplePassword" placeholder="Date of releasing"
                                            onChange={e => {
                                                this.setState({
                                                    imdbRating: e.target.value,
                                                })
                                            }} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Production Company:  </Label>
                                    <Col sm={10}>
                                        <Input name="production" id="examplePassword" placeholder="production company"
                                            onChange={e => {
                                                this.setState({
                                                    productionCompany: e.target.value,
                                                })
                                            }} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleFile" sm={2}>Poster: </Label>
                                    <Col sm={10}>
                                        <Input type="file" name="file" id="exampleFile"
                                            onChange={this.saveImage} />
                                        <FormText>(Upload movie/series image)</FormText>
                                    </Col>
                                </FormGroup>
                                {typeSelected === "Series" ?
                                    <div>
                                        <FormGroup row>
                                            <Label for="examplePassword" sm={2}> Number of seasons:  </Label>
                                            <Col sm={10}>
                                                <Input name="numSeasons" id="examplePassword" placeholder="production company"
                                                    onChange={e => {
                                                        this.setState({
                                                            numberOfSeasons: e.target.value,
                                                        })
                                                    }} />
                                            </Col>
                                        </FormGroup>
                                        {inputFields.map((inputField, index) => (
                                            <Fragment key={`${inputField}~${index}`}>
                                                <FormGroup row>
                                                    <Label for="examplePassword" sm={2}>Name:  </Label>
                                                    <Col sm={10}>
                                                        <Input
                                                            name="epiName"
                                                            id="epiName"
                                                            placeholder="Episode Name"
                                                            value={inputField.name}
                                                            onChange={this.handleInputChange(index)}
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="examplePassword" sm={2}>Episode Link:  </Label>
                                                    <Col sm={10}>
                                                        <Input
                                                            name="epiLink"
                                                            id="epiLink"
                                                            placeholder="Episode Link"
                                                            value={inputField.episodeLink}
                                                            onChange={this.handleInputChange(index)}
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="examplePassword" sm={2}>Episode Number:  </Label>
                                                    <Col sm={10}>
                                                        <Input
                                                            name="epiNum"
                                                            id="epiNum"
                                                            placeholder="Episode Number"
                                                            value={inputField.episodeNumber}
                                                            onChange={this.handleInputChange(index)}
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="examplePassword" sm={2}>Description:  </Label>
                                                    <Col sm={10}>
                                                        <Input
                                                            name="description"
                                                            id="description"
                                                            placeholder="Episode summary"
                                                            value={inputField.episodeSummary}
                                                            onChange={this.handleInputChange(index)}
                                                        />
                                                    </Col>
                                                </FormGroup>
                                            </Fragment>
                                        ))}
                                        <div className="form-group col-sm-2">
                                            {/* <button
                                                className="btn btn-link"
                                                type="button"
                                                onClick={this.handleRemoveShareholder(index)}
                                            >
                                                -
                                                    </button> */}
                                            <button
                                                className="btn btn-link"
                                                type="button"
                                                onClick={() => this.handleAddFields()}
                                            >
                                                +
                                                    </button>
                                        </div>
                                    </div> :
                                    <div></div>

                                }
                                <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Button color="primary" size="lg" active
                                        onSubmit={() => { this.handleSubmit() }}>Submit</Button>
                                </div>
                            </Form>
                        </div>
                        <div className="col-md-3"> <h1></h1></div>
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        );
    }
}

export default TopPicks;