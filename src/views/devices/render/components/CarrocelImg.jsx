import React, { useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import DescriptionImg from './DescriptionImg';

import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';

import '../../css/carrocel.css';

const Carrocel = (props) => {
    const { midia, setFailPhoto } = props;

    const [btnSelectedOk, setBtnSelectedOk] = useState(false);
    const [btnSelectedIndexOk, setBtnSelectedIndexOk] = useState([]);
    const [btnSelectedFail, setBtnSelectedFail] = useState(false);
    const [btnSelectedIndexFail, setBtnSelectedIndexFail] = useState([]);

    const [photoDisapproved, setPhotoDisapproved] = useState([]);

    const handleClickOk = (index, item) => {
        setBtnSelectedOk(true);
        setBtnSelectedIndexOk([index, ...btnSelectedIndexOk]);

        const removeIndex = btnSelectedIndexFail.filter((i) => index !== i);
        setBtnSelectedIndexFail(removeIndex);

        const removeItem = photoDisapproved.filter((i) => item.id !== i.id);
        setPhotoDisapproved(removeItem);
        setFailPhoto(removeItem);
    };

    const handleClickFail = (index, item) => {
        setBtnSelectedFail(true);
        setBtnSelectedIndexFail([index, ...btnSelectedIndexFail]);

        const removeIndex = btnSelectedIndexOk.filter((i) => index !== i);
        setBtnSelectedIndexOk(removeIndex);

        const contain = photoDisapproved.some(({ id }) => id === item.id);

        if (contain) {
            setPhotoDisapproved(photoDisapproved);
            setFailPhoto(photoDisapproved);
        } else {
            setPhotoDisapproved([item, ...photoDisapproved]);
            setFailPhoto([item, ...photoDisapproved]);
        }
    };

    return midia.length !== 0 ? (
        <div className="container-menu">
            <Gallery>
                {midia.map((item, i) => {
                    const index = i + 1;
                    return (
                        <Item
                            original={item.url}
                            thumbnail={item.url}
                            width="1024"
                            height="768"
                            key={index.toString()}
                        >
                            {({ ref, open }) => (
                                <div className="container-carrocel">
                                    <div className="btn-photo">
                                        <i className="me-5 p-1">
                                            <BsFillCheckCircleFill
                                                className={
                                                    btnSelectedOk &&
                                                    btnSelectedIndexOk.find(
                                                        (i) => index === i
                                                    )
                                                        ? 'btn-selected-ok'
                                                        : 'btn-radius'
                                                }
                                                onClick={() =>
                                                    handleClickOk(index, item)
                                                }
                                                size={30}
                                                color="green"
                                            />
                                        </i>
                                        <i className="ms-5 p-1">
                                            <BsFillXCircleFill
                                                className={
                                                    btnSelectedFail &&
                                                    btnSelectedIndexFail.find(
                                                        (i) => index === i
                                                    )
                                                        ? 'btn-selected-x'
                                                        : 'btn-radius'
                                                }
                                                onClick={() =>
                                                    handleClickFail(index, item)
                                                }
                                                size={30}
                                                color="red"
                                            />
                                        </i>
                                    </div>
                                    <img
                                        ref={ref}
                                        onClick={open}
                                        width="256"
                                        height="170"
                                        src={item.url}
                                    />
                                    <DescriptionImg desc={item.description} />
                                </div>
                            )}
                        </Item>
                    );
                })}
            </Gallery>
        </div>
    ) : (
        <h1 className="text-not-image">Não há fotos disponíveis</h1>
    );
};

export default Carrocel;
