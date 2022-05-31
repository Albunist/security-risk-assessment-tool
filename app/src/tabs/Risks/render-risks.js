/*----------------------------------------------------------------------------
*
*     Copyright © 2022 THALES. All Rights Reserved.
 *
* -----------------------------------------------------------------------------
* THALES MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
* THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THALES SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING,
 * MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
*
* THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
* CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
* PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
* NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
* SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
* SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
* PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). THALES
* SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
* HIGH RISK ACTIVITIES.
* -----------------------------------------------------------------------------
*/

const renderRisks = () => {
  const html = '';
  const tableOptions = {
    layout: 'fitColumns',
    height: '100%',
    columns: [ // Define Table Columns
      {
        title: 'Risk Id', field: 'riskId', width: 100, headerSort: false, headerHozAlign: 'center', validator: 'integer',
      },
      {
        title: 'Project Version', field: 'projectVersionRef', headerSort: false, headerHozAlign: 'center',
      },
      {
        title: 'Risk Name', field: 'riskName', headerSort: false, headerHozAlign: 'center',
      },
      {
        title: 'Risk Level', field: 'residualRiskLevel', editor: 'input', headerSort: false, headerHozAlign: 'center',
      },
      {
        title: 'Mitigation Decision', field: 'decision', editor: 'input', headerSort: false, headerHozAlign: 'center',
      },
    ],
  };
  return [html, tableOptions];
};

module.exports = {
  renderRisks,
};