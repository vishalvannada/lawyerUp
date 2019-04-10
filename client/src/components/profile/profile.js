import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "../layout/header";
import Rating from 'react-rating';
import {Link} from 'react-router-dom';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200},
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data01 = [
    {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
];
const data02 = [
    {name: 'A1', value: 100},
    {name: 'A2', value: 300},
    {name: 'B1', value: 100},
    {name: 'B2', value: 80},
    {name: 'B3', value: 40},
    {name: 'B4', value: 30},
    {name: 'B5', value: 50},
    {name: 'C1', value: 100},
    {name: 'C2', value: 200},
    {name: 'D1', value: 150},
    {name: 'D2', value: 50},
];

class Profile extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div style={{'background': '#e8e8e8'}}>
                    <div className="container">
                        <br/>
                        <h4 className="text-left">Account</h4>
                        <hr/>
                        <Link to='/availability' target="_blank">
                            <span className="float-left">Fill your availability here
                            <span>
                                <i style={{'fontSize': '12px'}}
                                   className="ml-2 fas fa-external-link-alt"/>
                            </span>
                        </span>
                        </Link>
                        <br/>
                        <br/>
                    </div>
                </div>

                <br/>
                <div className="container">
                    <div className="row">
                        <div className="text-left col-lg-4">

                            <div className="card shadow p-3 mb-4 bg-white rounded">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-5">
                                            <i style={{'fontSize': '100px'}} className="far fa-user-circle"/>
                                        </div>
                                        <div className="col">
                                            <h3>
                                                Harikrishna Pariveda Reddy Yadav
                                            </h3>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="text-center">
                                        <div className="gold">
                                            <Rating
                                                initialRating={4.5}
                                                emptySymbol="far fa-star fa-2x"
                                                fullSymbol="fas fa-star fa-2x"
                                            />
                                        </div>
                                        <h5 className="mt-3">
                                            <i className="fas fa-envelope"/><span
                                            className="ml-2">vishal.vannada@sjsu.edu</span>
                                        </h5>
                                        <h5>
                                            <i className="fas fa-map-marker-alt"/>
                                            <span className="ml-2">San Jose</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow p-3 mb-5 bg-white rounded">
                                <div className="card-body">

                                    <h4>About</h4>
                                    <hr/>
                                    <span className="text-justify">
                                        Lorem ipsum dolor sit amet, eos graeci utroque fierent an.
                                    Sit ea meis prodesset. Et cibo audiam debitis per, ei usu
                                    quodsi viderer. Decore fabellas qui no, dicit volumus denique in per.
                                    Dico definitionem ei usu. Quo debet alienum scripserit cu, et vel
                                    tation altera pertinax.
                                    </span>
                                </div>
                            </div>


                        </div>

                        <div className="text-left col-lg-8">
                            <div className="card shadow p-3 mb-4 bg-white rounded">
                                <div className="card-body">

                                    <PieChart width={600} height={300} onMouseEnter={this.onPieEnter}>
                                        <Pie
                                            data={data}
                                            cx={120}
                                            cy={120}
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {
                                                data.map((entry, index) => <Cell key={`cell-${index}`}
                                                                                 fill={COLORS[index % COLORS.length]}/>)
                                            }
                                        </Pie>
                                        <Pie
                                            data={data}
                                            cx={420}
                                            cy={120}
                                            startAngle={180}
                                            endAngle={0}
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {
                                                data.map((entry, index) => <Cell key={`cell-${index}`}
                                                                                 fill={COLORS[index % COLORS.length]}/>)
                                            }
                                        </Pie>
                                    </PieChart>

                                    <PieChart width={400} height={400}>
                                        <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60}
                                             fill="#8884d8"/>
                                        <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70}
                                             outerRadius={90} fill="#82ca9d" label/>
                                    </PieChart>

                                </div>
                            </div>
                            <div className="card shadow p-3 mb-5 bg-white rounded">
                                <div className="card-body">
                                    <h3>Reviews</h3>
                                    <hr/>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="float-left">
                                                        <i style={{'fontSize': '30px', 'verticalAlign': 'super'}}
                                                           className="far fa-user-circle"/>
                                                    </span>
                                                    <h5 className="ml-2 float-left">Vishal Vannada</h5>
                                                </div>
                                                <div className="col text-right">
                                                    <div className="gold">
                                                        <Rating
                                                            readonly={true}
                                                            initialRating={4.5}
                                                            emptySymbol="far fa-star"
                                                            fullSymbol="fas fa-star"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            Lorem ipsum dolor sit amet, eos graeci utroque fierent an.
                                            Sit ea meis prodesset. Et cibo audiam debitis per, ei usu
                                            quodsi viderer. Decore fabellas qui no, dicit volumus denique in per.
                                            Dico definitionem ei usu. Quo debet alienum scripserit cu, et vel
                                            tation altera pertinax.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps, null)(Profile);
