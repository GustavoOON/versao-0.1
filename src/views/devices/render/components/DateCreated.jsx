import React, { useEffect, useState } from 'react';

const DateCreated = (props) => {
    const { date, status } = props;
    const [time, setTime] = useState();
    const [moreThan3, setMoreThan3] = useState(false);

    useEffect(() => {
        const today = new Date();

        const mes = today.getMonth();
        const ano = today.getFullYear();
        const data = new Date(ano, mes, 0);

        const hour = 3600000; // horas em milessimos
        const day = hour * 24; // dias em milessimos
        const month = day * data; // mes em milessimos
        const year = month * 12; // anos em millessimos

        const calcYear = 1000 * 60 * 60 * 24 * data * 12;
        const calcMonth = 1000 * 60 * 60 * 24 * data;
        const calcDay = 1000 * 60 * 60 * 24;
        const calcHour = 1000 * 60 * 60;

        function time() {
            let startDate = new Date(date);

            const elapsedTime = today - startDate.getTime();

            if (elapsedTime >= year) {
                status !== 'SYNCHRONIZED' ? setMoreThan3(true) : null;
                const rYear = Math.floor(elapsedTime / calcYear);
                return rYear < 1
                    ? `há ${rYear} ano`
                    : `há ${rYear} anos` && rYear >= 10
                    ? `há ${rYear} anos`
                    : `há 0${rYear} anos`;
            } else if (elapsedTime >= month) {
                status !== 'SYNCHRONIZED' ? setMoreThan3(true) : null;
                const rMonth = Math.floor(elapsedTime / calcMonth);
                return rMonth < 1
                    ? `há ${rMonth} mes`
                    : `há ${rMonth} meses` && rMonth >= 10
                    ? `há ${rMonth} meses`
                    : `há 0${rMonth} meses`;
            } else if (elapsedTime >= day) {
                status !== 'SYNCHRONIZED' && day >= 3 ? setMoreThan3(true) : null;
                const rDay = Math.floor(elapsedTime / calcDay);
                return rDay < 1
                    ? `há ${rDay} dia`
                    : `há ${rDay} dias` && rDay >= 10
                    ? `há ${rDay} dias`
                    : `há 0${rDay} dias`;
            } else if (elapsedTime >= hour) {
                const rHour = Math.floor(elapsedTime / calcHour);
                return rHour <= 10 ? `há 0${rHour} h` : `há ${rHour} h`;
            } else return 'há 00 h';
        }
        setTime(time());
    }, [date]);

    return moreThan3 ? (
        <div>
            <label className="more-than-3">{time}</label>
        </div>
    ) : (
        <div>
            <label>{time}</label>
        </div>
    );
};

export default DateCreated;
