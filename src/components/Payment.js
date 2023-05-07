import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Payment() {
    const navigate=useNavigate()
    
  return (
    <><center><center>
    <div class="container text-center" style={{marginLeft:"30vh"}}>
    <div class="row">
        <div class="col-xs-12 col-md-4 col-md-offset-4">
            <div class="panel panel-default text-center" >
                <div class="panel-heading">
                    <div class="row text-center">
                        <h3 class="p1">Payment Details</h3>
                        <img class="img-responsive cc-img" alt=""src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"/>
                    </div>
                </div>
                <div class="panel-body">
                    <form role="form">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="p1">
                                    <br></br><label>CARD NUMBER</label>
                                    <div class="input-group">
                                        <input type="tel" class="form-control" placeholder="Valid Card Number" />
                                        <span class="input-group-addon"><span class="fa fa-credit-card"></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-7 col-md-7">
                                <div class="p1"><br></br>
                                    <label><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">(EXP)&nbsp;&nbsp;</span> DATE</label>
                                    <br></br><input type="tel" class="form-control" placeholder="MM / YY" />
                                </div>
                            </div>
                            <div class="col-xs-5 col-md-5 pull-right">
                                <div class="p1"><br></br>
                                    <label>CV CODE</label>
                                    <input type="tel" class="form-control" placeholder="CV Code" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="p1"><br></br>
                                    <label>CARD OWNER</label><br></br>
                                    <input type="text" class="form-control" placeholder="Card Owner Names" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div><br></br>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-xs-12">
                            <button class="btn btn-warning btn-lg btn-block" onClick={()=>navigate("/confirm")}>Process payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></center></center>
    </>
    
  )
}
