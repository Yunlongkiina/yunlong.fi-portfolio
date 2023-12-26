import React,{useContext,useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Context as DeliveryOrderContext } from '../../context/DeliveryOrderContext';
import { Context as AuthContext } from '../../context/AuthContext';
import DeliveryOrderContent from './deliveryOrderContent';
import LoadingSpinner from '../../loadingSpinner/loadingspinner';

const DeliveryOrders = () => {
	const { state, getDeliveryOrder, onSubmitDeliveryOrder} = useContext(DeliveryOrderContext);
	const {state:{userId}} = useContext(AuthContext);

	const [nsoNumber, setNsoNumber] = useState('');
	const [clickSubmitBtn, setClickSubmitBtn] = useState(false);
	const [freshPicker, setFreshPicker] = useState(state.freshPicker)
	const [frozenPicker, setFrozenPicker] = useState(state.frozenPicker)
	const [dryPicker, setDryPicker] = useState(state.dryPicker)

	const [freshPickerMistakes, setFreshPickerMistakes] = useState(state.freshPickerMistakes)
	const [frozenPickerMistakes, setFrozenPickerMistakes] = useState(state.frozenPickerMistakes)
	const [dryPickerMistakes, setDryPickerMistakes] = useState(state.dryPickerMistakes)

	const [forzenProductsChecker, setFrozenChecker] = useState(state.forzenProductsChecker)
	const [dryProductsChecker, setDryChecker] = useState(state.dryProductsChecker)

	useEffect(() => {
		if(state){
			setFreshPicker(state.freshPicker)
			setFrozenPicker(state.frozenPicker)
			setDryPicker(state.dryPicker)
			setFreshPickerMistakes(state.freshPickerMistakes)
			setFrozenPickerMistakes(state.frozenPickerMistakes)
			setDryPickerMistakes(state.dryPickerMistakes)
			setFrozenChecker(state.forzenProductsChecker)
			setDryChecker(state.dryProductsChecker)

		}
		// reset();
	  }, [state]);

	const NsoInputStyle={
		width: '70%',
		// borderWidth: '2px',
		marginTop: '2px',
		marginRight: '2px',
		height: '50px',
		paddingLeft: '3px',
		borderRadius: '20px',
		fontSize: '20px'
	}
	const searchButton = {
		width: '20%',
		minWidth: '100px',
		height: '50px',
		borderRadius: '20px',
		fontSize: '24px'
	}

	return (
		<React.Fragment>
			<Container className='py-5' style={{marginTop: '20px',textAlign: 'center'}} fluid>
				<>
					<input
						style={NsoInputStyle}
						placeholder="Type NSO Last Five Number/输入NSO后五位: 2390123"
						name="NSO Number"
						type="number"
						onChange={e => setNsoNumber(e.target.value)}
					/>
					<button
						style={searchButton}
						variant="outline-secondary"
						onClick={()=>getDeliveryOrder(nsoNumber)}
					>SEARCH</button>
				</>
				{
					state?
						<DeliveryOrderContent
							initialState = {state}

							freshPicker={freshPicker}
							frozenPicker={frozenPicker}
							dryPicker={dryPicker}

							freshPickerMistakes={freshPickerMistakes}
							frozenPickerMistakes={frozenPickerMistakes}
							dryPickerMistakes={dryPickerMistakes}

							forzenProductsChecker={forzenProductsChecker}
							dryProductsChecker={dryProductsChecker}

							setFreshPicker={setFreshPicker}							
							setFrozenPicker={setFrozenPicker}
							setDryPicker={setDryPicker}

							setFreshPickerMistakes={setFreshPickerMistakes}
							setFrozenPickerMistakes={setFrozenPickerMistakes}
							setDryPickerMistakes={setDryPickerMistakes}

							setFrozenChecker={setFrozenChecker}
							setDryChecker={setDryChecker}

							setClickSubmitBtn = {setClickSubmitBtn}
							onSubmit={(orderLines,validateOrder)=>{
								onSubmitDeliveryOrder(
									{
										validateOrder:validateOrder,
										userId:userId,
										pickingIds:state.pickingIds,
										saleOrderId:state.saleOrderId,
										freshPicker:freshPicker?freshPicker:'',
										frozenPicker:frozenPicker? frozenPicker:'',
										dryPicker:dryPicker?dryPicker:'',

										freshPickerMistakes:freshPickerMistakes?freshPickerMistakes:'',
										frozenPickerMistakes:frozenPickerMistakes? frozenPickerMistakes:'',
										dryPickerMistakes:dryPickerMistakes?dryPickerMistakes:'',

										forzenProductsChecker:forzenProductsChecker?forzenProductsChecker:'',
										dryProductsChecker:dryProductsChecker?dryProductsChecker:'',
										orderLines:orderLines
									},()=>setClickSubmitBtn(false))
							}}
						/>:
						<></>

				}
				{ clickSubmitBtn? <LoadingSpinner />:null }
			</Container>
		</React.Fragment>
	)
}

export default DeliveryOrders;