import React from 'react';


export default class History extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { history } = this.props;
        return (
            <div className='col-12 col-md-6 mb-4'>
                <div className='card text-center'>
                    <h5 className='card-header alert alert-primary'>Search History</h5>
                    <div className='card-body' id='history-scroll'>
                        <table className='table table-striped border-0'>
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th className='d-flex justify-content-end'>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item[0]}</td>
                                            <td className='d-flex justify-content-end'>{item[1]}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

