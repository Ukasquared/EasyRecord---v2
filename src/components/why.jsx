import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faClipboardUser, faRecordVinyl} from '@fortawesome/free-solid-svg-icons';





function WhyUs() {
    return (
        <section class="why_section layout_padding">
            <div class="container">
                <div class="heading_container heading_center">
                    <h2>
                    Why Choose <span>Us</span>
                    </h2>
                </div>
                <div class="why_container">
                    <div class="box">
                    <div class="img-box">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" />
                    </div>
                    <div class="detail-box">
                        <h5>
                        Email Messaging Service
                        </h5>
                        <p>
                        Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                        Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                    </div>
                    </div>
                    <div class="box">
                    <div class="img-box">
                    <FontAwesomeIcon icon={faUser} size="3x" />
                    </div>
                    <div class="detail-box">
                        <h5>
                        Distinct Portal for Users
                        </h5>
                        <p>
                        Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                        Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                    </div>
                    </div>
                    <div class="box">
                    <div class="img-box">
                    <FontAwesomeIcon icon={faClipboardUser} size="3x"/>
                    </div>
                    <div class="detail-box">
                        <h5>
                        Attendance System
                        </h5>
                        <p>
                        Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                        Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                    </div>
                    </div>
                    <div class="box">
                    <div class="img-box">
                    <FontAwesomeIcon icon={faRecordVinyl} size="3x" />
                    </div>
                    <div class="detail-box">
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
                <div class="btn-box">
                    <Link to="">
                    Read More
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;