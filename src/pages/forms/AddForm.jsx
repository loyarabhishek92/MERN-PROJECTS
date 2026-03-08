import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";

import * as Yup from "yup";
import { setUser } from "./userSlice";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const valSchema = Yup.object({
    userid: Yup.string().min(6).max(6).required(),
    username: Yup.string().min(4).max(30).required(),
    email: Yup.string().email().required(),
    phone: Yup.string().min(10).max(10).required(),
    address: Yup.string().min(4).max(50).required(),
    gender: Yup.string().required(),
    course: Yup.string().required(),
    feedback: Yup.string().min(10).max(500).required(),

});

export default function AddForm() {

    const nav = useNavigate();
    const dispatch = useDispatch();


    return (
        <div className="px-20 mt-5">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Add Student</CardTitle>
                    <CardDescription>
                        Enter student's details.
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <Formik
                        initialValues={{
                            userid: '',
                            username: '',
                            email: '',
                            phone: '',
                            address: '',
                            gender: '',
                            course: '',
                            feedback: '',
                        }}

                        onSubmit={(val, { resetForm }) => {
                            dispatch(setUser({
                                ...val,
                                id: nanoid()
                            }));
                            nav(-1);
                            resetForm();
                            toast.success('Form submited successfully');

                        }}

                        validationSchema={valSchema}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => {
                            return <form
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-4  gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="userid">Id</Label>
                                        <Input
                                            name="userid"
                                            value={values.userid}
                                            onChange={handleChange}
                                            id="userid"
                                            type="number"
                                            placeholder="213545"

                                        />
                                        {errors.userid && touched.userid && <p className="text-red-500">{errors.userid}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="username">Username</Label>
                                        <Input
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            id="username"
                                            type="text"
                                            placeholder="Virat Kholi"

                                        />
                                        {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"

                                        />
                                        {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            name='phone'
                                            value={values.phone}
                                            onChange={handleChange}
                                            id="phone"
                                            type="number"
                                            placeholder="98********"

                                        />
                                        {errors.phone && touched.phone && <p className="text-red-500">{errors.phone}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="address">Address</Label>
                                        <Input
                                            name='address'
                                            value={values.address}
                                            onChange={handleChange}
                                            id="address"
                                            type="text"


                                        />
                                        {errors.address && touched.address && <p className="text-red-500">{errors.address}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="gender">Select your gender</Label>
                                        <RadioGroup
                                            onValueChange={(val) => {
                                                setFieldValue('gender', val);
                                            }}
                                            defaultValue="comfortable" className="w-fit">
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value="Male" id="r1" />
                                                <Label htmlFor="r1">Male</Label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value="Female" id="r2" />
                                                <Label htmlFor="r2">Female</Label>
                                            </div>
                                        </RadioGroup>
                                        {errors.gender && touched.gender && <p className="text-red-500">{errors.gender}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="course">Select course</Label>
                                        <Select
                                            onValueChange={(val) => {
                                                setFieldValue('course', val);
                                            }}
                                        >
                                            <SelectTrigger className="w-full max-w-48">
                                                <SelectValue placeholder="Select a course" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Courses</SelectLabel>
                                                    <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                                                    <SelectItem value="MERN Stack">MERN Stack</SelectItem>
                                                    <SelectItem value="Web Design">Web Design</SelectItem>
                                                    <SelectItem value="Python with Django">Python with Django</SelectItem>
                                                    <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                                                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                                                    <SelectItem value="DevOps">DevOps</SelectItem>
                                                    <SelectItem value="Quality Assurance">Quality Assurance</SelectItem>
                                                    <SelectItem value="Flutter">Flutter</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        {errors.course && touched.course && <p className="text-red-500">{errors.course}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="feedback">Feedback</Label>
                                        <Textarea
                                            name='feedback'
                                            value={values.feedback}
                                            onChange={handleChange}
                                            id="feedback"
                                            type="text"
                                            placeholder="Type your feedback here."
                                        />
                                        {errors.feedback && touched.feedback && <p className="text-red-500">{errors.feedback}</p>}
                                    </div>

                                </div>


                                <div className="w-full flex justify-end mt-5">
                                    <Button type="submit" className=" bg-blue-900">
                                        Submit
                                    </Button>
                                </div>


                            </form>
                        }}
                    </Formik>

                </CardContent>


            </Card>
        </div >
    )
}
