import {createCustomElement, actionTypes} from '@servicenow/ui-core';
const {COMPONENT_BOOTSTRAPPED} = actionTypes;
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import * as ntca from '@servicenow/now-template-card';
import { createHttpEffect } from '@servicenow/ui-effect-http';


const view = (state, {updateState}) => {
	const {incident_list} = state;
	console.log(incident_list);
	return (
		<div className="custom-card-container">
			{
				incident_list && incident_list.map(incident => {
					return (
						<div className="card-custom-styles">
							<now-template-card-assist 
								tagline={
									{
										"icon":"tree-view-long-outline",
										"label":"Incident"
									}
								} 
								actions={
									[
										{"id":"share","label":"Copy URL"},
										{"id":"close","label":"Mark Complete"}
									]
								} 
								heading={
									{"label": incident.short_description}
								} 
								content={
									[
										{"label":"Number","value":{"type":"string","value": incident.number}},
										{"label":"State","value":{"type":"string","value": incident.state}},
										{"label":"Assignmet Group","value":{"type":"string","value": incident.assignment_group.value}},
										{"label":"Assigned To","value":{"type":"string","value": incident.assigned_to.value}}
									]
								} 
								contentItemMinWidth="300" 
								footerContent={
									{"label":"Updated","value": incident.sys_updated_on}
								} 
								configAria={{}}
							>
							</now-template-card-assist>
						</div>
					)
				})
			}
		</div>
	);
};

createCustomElement('x-551472-incident-list', {
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const { dispatch } = coeffects;
		
			dispatch('FETCH_LATEST_INCIDENT', {
				sysparm_display_value: true
			});
		},
		'FETCH_LATEST_INCIDENT': createHttpEffect('api/now/table/incident', {
			method: 'GET',
			queryParams: ['sysparam_display_value'],
			successActionType: 'FETCH_LATEST_INCIDENT_SUCCESS'
		}),
		'FETCH_LATEST_INCIDENT_SUCCESS': (coeffects) => {
			const { action, updateState } = coeffects;
			const { result } = action.payload;
					
			updateState({incident_list: result});
		}
	},
	renderer: {type: snabbdom},
	view,
	styles
});