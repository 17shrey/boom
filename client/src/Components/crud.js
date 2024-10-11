import React, { useEffect, useState } from "react";


const Crud = () => {
    const [cruds, setCruds] = useState([]);
    const [crud, setCrud] = useState({
        first_name: "",
        last_name: "",
        address: "",
        adhar_no: ""
    });


    useEffect(() => {
        fetchData();
    }, []);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(e);

        setCrud({ ...crud, [name]: value });
    };


    const fetchData = async () => {
        try {
            const response = await fetch("https://boom-rosy.vercel.app/showcrud");
            const data = await response.json();
            setCruds(data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const postData = async (e) => {
        console.log("user saving in progress");
        e.preventDefault();
        const { first_name, last_name, address, adhar_no } = crud;
        const rest = await fetch("https://boom-rosy.vercel.app/usersave", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name,
                last_name,
                address,
                adhar_no,
            }),
        });
        const data = await rest.json();
        if (data.status === 422 || !data) {
            window.alert("Entry could not be saved");
        } else {
            window.alert("Entry saved Successfull");
            window.location.href = '/'
        }
    };

    // const deleteData = async (e) => {
    //     e.preventDefault();
    //     const { name } = cat;

    //     var checkWithUser = window.confirm("Are you sure you want to delete?");
    //     if (checkWithUser) {
    //         const rest = await fetch("/categorydelete", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name,
    //             }),
    //         });
    //         const data = await rest.json();
    //         if (data.status === 422 || !data) {
    //             window.alert("Category could not be deleted");
    //         } else {
    //             window.alert("Category deleted Successfull");
    //             window.location.href='/categoryapi'
    //         }
    //     } else {
    //         window.alert("Operation rolledback, Your data is save with us");
    //     }
    // };

    return (
        <div>
            <>
                <div>
                    <section className="vh-100 my-4">
                        <div className="container-fluid h-custom">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                    <form  >
                                        <div className="form-outline mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="first_name"
                                                value={crud.first_name}
                                                onChange={handleInputs}
                                                placeholder="Enter First name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-outline mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="last_name"
                                                value={crud.last_name}
                                                onChange={handleInputs}
                                                placeholder="Enter Last name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-outline mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                value={crud.address}
                                                onChange={handleInputs}
                                                placeholder="Enter Address"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-outline mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="adhar_no"
                                                value={crud.adhar_no}
                                                onChange={handleInputs}
                                                placeholder="Enter Adhar No"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-outline mb-3">
                                            <p className="small text-center">
                                                <input
                                                    type="submit"
                                                    onClick={postData}
                                                    value="Save"
                                                    id="btnSaveCategory"
                                                    className="btn btn-success btn-sm btn-block"
                                                />
                                                {/* <input
                                                    type="submit"
                                                    onClick={deleteData}
                                                    value="Delete"
                                                    id="btnDeleteCategory"
                                                    className="btn btn-danger btn-sm btn-block"
                                                /> */}
                                            </p>
                                        </div>
                                    </form>
                                </div>
                                <b><hr /></b>
                                <div className="col-md-7">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Adhar No</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cruds.map((s) => {
                                                return (
                                                    <tr>
                                                        <td>{s.first_name}</td>
                                                        <td>{s.last_name}</td>
                                                        <td>{s.address}</td>
                                                        <td>{s.adhar_no}</td>

                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </>
        </div >
    );
};

export default Crud;
