import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faClipboardUser, faRecordVinyl} from '@fortawesome/free-solid-svg-icons';





function WhyUs() {
    return (
        <section className="why_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                    Why Choose <span>Us</span>
                    </h2>
                </div>
                <div className="why_container">
                    <div className="box">
                    <div className="img-box">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" />
                    </div>
                    <div className="detail-box">
                        <h5>
                        Email Messaging Service
                        </h5>
                        <p>
                        Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                        Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                    </div>
                    </div>
                    <div className="box">
                    <div className="img-box">
                    <FontAwesomeIcon icon={faUser} size="3x" />
                    </div>
                    <div className="detail-box">
                        <h5>
                        Distinct Portal for Users
                        </h5>
                        <p>
                        Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                        Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                    </div>
                    </div>
                    <div className="box">
                    <div className="img-box">
                    <FontAwesomeIcon icon={faClipboardUser} size="3x"/>
                    </div>
                    <div className="detail-box">
                        <h5>
                        Attendance System
                        </h5>
                        <p>
                        Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                        Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                    </div>
                    </div>
                    <div className="box">
                    <div className="img-box">
                    <FontAwesomeIcon icon={faRecordVinyl} size="3x" />
                    </div>
                    <div className="detail-box">
                        <h5>
                        Score Management
                        </h5>
                        <p>
                        Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                        Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                    </div>
                    </div>
                </div>
                <div className="btn-box">
                    <Link to="">
                    Read More
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;