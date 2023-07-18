import ordersData from './DB.json'

import Link from 'next/link'

export default function Home() {
    return (
        <>
            {/* <div class="table-responsive-vertical shadow-z-1">
                <table id="table" class="table table-hover table-mc-light-blue">
                    <thead>
                        <tr>
                        <th>Order ID</th>
                        <th>description</th>
                        <th>price</th>
                        <th>deliveryDate</th>
                        <th>comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-title="ID">1</td>
                            <td data-title="Name">Material Design Color Palette</td>
                            <td data-title="Link">
                                <a href="https://github.com/zavoloklom/material-design-color-palette" target="_blank">GitHub</a>
                            </td>
                            <td data-title="Status">Completed</td>
                        </tr>
                        <tr>
                            <td data-title="ID">2</td>
                            <td data-title="Name">Material Design Iconic Font</td>
                            <td data-title="Link">
                                <a href="https://codepen.io/zavoloklom/pen/uqCsB" target="_blank">Codepen</a>
                                <a href="https://github.com/zavoloklom/material-design-iconic-font" target="_blank">GitHub</a>
                            </td>
                            <td data-title="Status">Completed</td>
                        </tr>
                        <tr>
                            <td data-title="ID">3</td>
                            <td data-title="Name">Material Design Hierarchical Display</td>
                            <td data-title="Link">
                                <a href="https://codepen.io/zavoloklom/pen/eNaEBM" target="_blank">Codepen</a>
                                <a href="https://github.com/zavoloklom/material-design-hierarchical-display" target="_blank">GitHub</a>
                            </td>
                            <td data-title="Status">Completed</td>
                        </tr>
                        <tr>
                            <td data-title="ID">4</td>
                            <td data-title="Name">Material Design Sidebar</td>
                            <td data-title="Link"><a href="https://codepen.io/zavoloklom/pen/dIgco" target="_blank">Codepen</a></td>
                            <td data-title="Status">Completed</td>
                        </tr>
                        <tr>
                            <td data-title="ID">5</td>
                            <td data-title="Name">Material Design Tiles</td>
                            <td data-title="Link">
                                <a href="https://codepen.io/zavoloklom/pen/wtApI" target="_blank">Codepen</a>
                            </td>
                            <td data-title="Status">Completed</td>
                        </tr>
                        <tr>
                            <td data-title="ID">6</td>
                            <td data-title="Name">Material Design Typography</td>
                            <td data-title="Link">
                                <a href="https://codepen.io/zavoloklom/pen/IkaFL" target="_blank">Codepen</a>
                                <a href="https://github.com/zavoloklom/material-design-typography" target="_blank">GitHub</a>
                            </td>
                            <td data-title="Status">Completed</td>
                        </tr>
                        <tr>
                            <td data-title="ID">7</td>
                            <td data-title="Name">Material Design Buttons</td>
                            <td data-title="Link">
                                <a href="https://codepen.io/zavoloklom/pen/Gubja" target="_blank">Codepen</a>
                            </td>
                            <td data-title="Status">In progress</td>
                        </tr>
                        <tr>
                            <td data-title="ID">8</td>
                            <td data-title="Name">Material Design Form Elements</td>
                            <td data-title="Link">
                                <a href="https://codepen.io/zavoloklom/pen/yaozl" target="_blank">Codepen</a>
                            </td>
                            <td data-title="Status">In progress</td>
                        </tr>
                        <tr>
                            <td data-title="ID">9</td>
                            <td data-title="Name">Material Design Email Template</td>
                            <td data-title="Link">
                                <a href="https://codepen.io/zavoloklom/pen/qEVqzx" target="_blank">Codepen</a>
                            </td>
                            <td data-title="Status">Completed</td>
                        </tr>
                        <tr>
                            <td data-title="ID">10</td>
                            <td data-title="Name">Material Design Animation Timing (old one)</td>
                            <td data-title="Link">
                                <a href="https://codepen.io/zavoloklom/pen/Jbrho" target="_blank">Codepen</a>
                            </td>
                            <td data-title="Status">Completed</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <div style={"width: 45%; display: inline-block; vertical-align: top"}> */}
            {/* <div>
                <h2>Table Constructor</h2>
                <p>
                    <label for="table-bordered">Style: bordered</label>
                    <select id="table-bordered" name="table-bordered">
                        <option selected value="">No</option>
                        <option value="table-bordered">Yes</option>
                    </select>
                </p>
                <p>
                    <label for="table-striped">Style: striped</label>
                    <select id="table-striped" name="table-striped">
                        <option selected value="">No</option>
                        <option value="table-striped">Yes</option>
                    </select>
                </p>
                <p>
                    <label for="table-hover">Style: hover</label>
                    <select id="table-hover" name="table-hover">
                        <option value="">No</option>
                        <option selected value="table-hover">Yes</option>
                    </select>
                </p>
                <p>
                    <label for="table-color">Style: color</label>
                    <select id="table-color" name="table-color">
                        <option value="">Default</option>
                        <option value="table-mc-red">Red</option>
                        <option value="table-mc-pink">Pink</option>
                        <option value="table-mc-purple">Purple</option>
                        <option value="table-mc-deep-purple">Deep Purple</option>
                        <option value="table-mc-indigo">Indigo</option>
                        <option value="table-mc-blue">Blue</option>
                        <option selected value="table-mc-light-blue">Light Blue</option>
                        <option value="table-mc-cyan">Cyan</option>
                        <option value="table-mc-teal">Teal</option>
                        <option value="table-mc-green">Green</option>
                        <option value="table-mc-light-green">Light Green</option>
                        <option value="table-mc-lime">Lime</option>
                        <option value="table-mc-yellow">Yellow</option>
                        <option value="table-mc-amber">Amber</option>
                        <option value="table-mc-orange">Orange</option>
                        <option value="table-mc-deep-orange">Deep Orange</option>
                    </select>
                </p>
            </div>
            <div> */}
            {/* <div style={"width: 45%; display: inline-block; vertical-align: top; margin-left: 30px;"}> */}
            {/* <h2>Description</h2>
                <p>Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7</p>
                <p>You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.</p>
                <p class="mdt-subhead-2"><strong>Donate:</strong> You can support me via <a class="paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=s%2ekupletsky%40gmail%2ecom&amp;lc=US&amp;item_name=Material%20Design%20Responsive%20Table&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted">PayPal</a>, <a class="webmoney" href="https://funding.webmoney.ru/material-design-iconic-font/donate">WebMoney</a> or <a class="gratipay" href="http://gratipay.com/zavoloklom/" target="_blank">Gratipay</a></p>
            </div> */}

            {/* </div> */}
            <div>
                <h1>list of orders</h1>
                <div></div>
                <table id="table" class="table table-hover table-mc-light-blue">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>description</th>
                            <th>price</th>
                            <th>deliveryDate</th>
                            <th>comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.ordersData.map((order) => (
                            <tr key={order.orderId}>
                                <td>{order.orderId}</td>
                                <td>{order.description}</td>
                                <td>{order.price}</td>
                                <td>{order.deliveryDate}</td>
                                <td>{order.comments}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link href="/">back to enrollment</Link>
            </div>
        </>
    );
}