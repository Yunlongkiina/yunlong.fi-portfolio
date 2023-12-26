import React, {useReducer,useEffect} from 'react';
import RenderTable from '../../components/RenderTable';
import PickerCheckerShow from '../../components/PickerCheckerShow';
import CheckerMistakes from '../../components/CheckerMistakes';
const initializer = initialState => initialState.content // 🍏

function reducer(state, action) {
	switch(action.type){
        case 'set_order_line':
			return state.map((line)=>{
				return line.lineId === action.payload.lineId ? action.payload:line
			})
		case 'get_delivery_order_lines':
			return action.playload;
		case 'reset':
			return initializer(action.payload)
        default:
            return state;
    }
}

const DeliveryOrderContent = ({
		initialState,frozenPicker,freshPicker,dryPicker,
		freshPickerMistakes,frozenPickerMistakes,dryPickerMistakes,
		forzenProductsChecker,dryProductsChecker,
		setFreshPicker,setFrozenPicker,setDryPicker,
		setFreshPickerMistakes,setFrozenPickerMistakes,setDryPickerMistakes,
		setFrozenChecker,setDryChecker,
		onSubmit,setClickSubmitBtn,
	}) => {
	const [state, dispatch] = useReducer(reducer,initialState.content,initializer);
	// const reset = () => dispatch({ type: "reset", payload: initialState });
	
	useEffect(() => {
		dispatch({ type: "reset", payload: initialState })
		// reset();
	  }, [initialState]);

	  const valdateOrder =()=> {
		let text = "Do you want to validate this order?";
		return window.confirm(text)
	  }
	  const checkShowConfirmIn=(lines)=>{

		for (let i = 0; i < lines.length; i++) {
			if(!lines[i].checked_by_picker)
			return false;
		  }
		return true;
	  }

	const DeliveryOrderdesContainer ={
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingBottom: '20px'
	}

	const DeliveryOrderdesRow ={
		display: 'flex',
		// flexDirection: 'row',
		flexFlow: 'row wrap',
		justifyContent: 'space-between',
		paddingTop: '10px'
	}

	const submitButton = {
		width: '20%',
		minWidth: '100px',
		height: '50px',
		borderRadius: '20px',
		fontSize: '24px'
	}

	return (
		<React.Fragment>
			<div><div>{initialState?
				<>
					<div style={DeliveryOrderdesContainer}>
						{/* Delivery Order Info */}
						<div style={DeliveryOrderdesRow}>
							<div>NSO: {initialState['sourceDocument']}</div>
							<div>DeliverOrder: {initialState['deliveryOrderNumber']}</div>
							<div>Driver: {initialState['driver']}</div>
						</div>

						{/* Picker and checker Info */}
						<div style={DeliveryOrderdesRow}>
							<PickerCheckerShow
								lable={'Fresh Picker: '}
								selectInit={initialState.pickers}
								selectValue={freshPicker}
								setSelection={setFreshPicker}
							/>
							<PickerCheckerShow
								lable={'Frozen Picker: '}
								selectInit={initialState.pickers}
								selectValue={frozenPicker}
								setSelection={setFrozenPicker}
							/>
							<PickerCheckerShow
								lable={'Dry Picker: '}
								selectInit={initialState.pickers}
								selectValue={dryPicker}
								setSelection={setDryPicker}
							/>
							<PickerCheckerShow
								lable={'Frozen Checker: '}
								selectInit={initialState.checkers}
								selectValue={forzenProductsChecker}
								setSelection={setFrozenChecker}
							/>
							<PickerCheckerShow
								lable={'Dry Checker: '}
								selectInit={initialState.checkers}
								selectValue={dryProductsChecker}
								setSelection={setDryChecker}
							/>

						</div>
						{/* Mistakes Info */}
						<div style={DeliveryOrderdesRow}>
							<CheckerMistakes
								lable={'FreshPicker Mistakes '}
								value={freshPickerMistakes}
								setMistakes={setFreshPickerMistakes}
							/>
							<CheckerMistakes
								lable={'FrozenPicker Mistakes '}
								value={frozenPickerMistakes}
								setMistakes={setFrozenPickerMistakes}
							/>
							<CheckerMistakes
								lable={'DryPicker Mistakes '}
								value={dryPickerMistakes}
								setMistakes={setDryPickerMistakes}
							/>

						</div>
					</div>
					<div className='DeliveryOrderCon'>
						<RenderTable
							deliverOrderLines = {initialState.content}
							setOrderLine= {line=>dispatch({
								type: 'set_order_line',
								payload:line
							})}
						/>
					</div>
					<>
						<button
							disabled={initialState.orderStatus ==='done'? true:false}
							style={submitButton}
							onClick={()=>{
								const willShow = checkShowConfirmIn(state);
								if(willShow){
									const validateOrderOrNot = valdateOrder();
									if(validateOrderOrNot){
										setClickSubmitBtn(true);
										onSubmit(state,{validateOrder:true})
									}else{
										setClickSubmitBtn(true);
										onSubmit(state,{validateOrder:false})
									}
								}else{
									setClickSubmitBtn(true);
									onSubmit(state,{validateOrder:false})
								}
							}
							}
						>SUBMIT</button>
					</>
				</>:<div></div>
			}</div></div>
		</React.Fragment>
	)
}

export default DeliveryOrderContent;