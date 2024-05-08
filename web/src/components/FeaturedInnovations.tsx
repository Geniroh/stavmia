import React from 'react';
import { Row, Col } from 'antd';
import InnovationCard from './InnovationCard';

const innovationList: InnovationType[] = [
    {
        name: "Powerful mill",
        usage: "Used in rice production",
        id: 1,
    },
    {
        name: "Efficient irrigation system",
        usage: "Saves water usage by 30%",
        id: 2,
    },
    {
        name: "Smart crop monitoring device",
        usage: "Real-time data on crop health",
        id: 3,
    },
    {
        name: "Smart crop monitoring device",
        usage: "Real-time data on crop health",
        id: 4,
    },

];

const FeaturedInnovations = () => {
    return (
        <div>
            <div className='max-w-[520px]'>
                <h1 className='text-5xl font-playfair font-bold'>
                    Top innovations in Agro tech curated for you.
                </h1>
                <h3 className='mt-3 text-[18px] font-normal'>We&apos;ve carefully curated the best innovations for you!</h3>
            </div>

            {/* <div className='mt-5'>
                <Row gutter={10}>
                    {innovationList.map((innovation, index) => (
                        <Col key={index} xs={24} md={12} lg={innovation?.id % 2 === 0 ? 6 : 18}>
                            <InnovationCard innovation={innovation} />
                        </Col>
                    ))}
                </Row>
            </div> */}
            <div className='mt-5'>
                <Row gutter={10}>
                    <Col key={1} xs={24} md={12} lg={18}>
                        <InnovationCard innovation={innovationList[0]} />
                    </Col>
                    <Col key={1} xs={24} md={12} lg={6}>
                        <InnovationCard innovation={innovationList[1]} />
                    </Col>
                    <Col key={1} xs={24} md={12} lg={6}>
                        <InnovationCard innovation={innovationList[2]} />
                    </Col>
                    <Col key={1} xs={24} md={12} lg={18}>
                        <InnovationCard innovation={innovationList[3]} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FeaturedInnovations;
