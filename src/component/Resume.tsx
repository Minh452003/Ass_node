import React, { useEffect, useState } from 'react'
import { IResume } from '../interfaces/resumes';
import { getAllRe } from '../api/resume';

type Props = {}

const Resume = (props: Props) => {
    const [resumes, setResumes] = useState<IResume[]>([]);
    useEffect(() => {
        (async () => {
            const { data } = await getAllRe();
            setResumes(data);
        })()
    }, [])
    return (
        <div className="section" id="resume">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">HỒ SƠ </span> CỦA TÔI</h2>
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <div className="mt-2">
                                <h4>Học Vấn</h4>
                                <span className="line"></span>
                            </div>
                        </div>
                        {resumes.map((resume) => {
                            return <div className="card-body" key={resume._id}>
                                <h6 className="title text-danger">{resume.timeline}</h6>
                                <p>{resume.title}</p>
                                <p className="subtitle">{resume.description}</p>
                            </div>
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume