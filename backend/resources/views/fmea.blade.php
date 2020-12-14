<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
  
  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">
  <title>fmea</title>

  
</head><body>
<div style="text-align: center;">
<h3 style="text-align: center;">Failure Modes and Effects Analysis
(Process FMEA)</h3>

<table style="text-align: left; width: 100%; border-collapse: collapse;" border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr align="left">
      <td colspan="6" style="vertical-align: top; width: 327px;"><small>Planning
and Preparation (Step 1)</small></td>
    </tr>
    <tr>
      <td style="vertical-align: top; width: 204px;"><small>Company Name</small></td>
      <td style="vertical-align: top; width: 361px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->company}}                        
      <br>
      </small></td>
      <td style="vertical-align: top; width: 172px;"><small>Subject</small></td>
      <td style="vertical-align: top; width: 319px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->subject}}
      <br>
      </small></td>
      <td style="vertical-align: top; width: 186px;"><small><br>
      </small></td>
      <td style="vertical-align: top; width: 327px;"><small><br>
      </small></td>
    </tr>
    <tr>
      <td style="vertical-align: top; width: 204px;"><small>Manufacture
Location</small></td>
      <td style="vertical-align: top; width: 361px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->location}}  <br>
      </small></td>
      <td style="vertical-align: top; width: 172px;"><small>PFMEA Start
Date</small></td>
      <td style="vertical-align: top; width: 319px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->start_date}}  <br>
      </small></td>
      <td style="vertical-align: top; width: 186px;"><small>PFMEA ID
Number</small></td>
      <td style="vertical-align: top; width: 327px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->number}}  <br>
      </small></td>
    </tr>
    <tr>
      <td style="vertical-align: top; width: 204px;"><small>Customer
Name</small></td>
      <td style="vertical-align: top; width: 361px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->customer}}  <br>
      </small></td>
      <td style="vertical-align: top; width: 172px;"><small>PFMEA Rev.
Date</small></td>
      <td style="vertical-align: top; width: 319px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->revision_date}}  <br>
      </small></td>
      <td style="vertical-align: top; width: 186px;"><small>Process
Responsibility</small></td>
      <td style="vertical-align: top; width: 327px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->respons}}  <br>
      </small></td>
    </tr>
    <tr>
      <td style="vertical-align: top; width: 204px;"><small>Model of
Year / Platform</small></td>
      <td style="vertical-align: top; width: 361px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->model}}  <br>
      </small></td>
      <td style="vertical-align: top; width: 172px;"><small>Cross-Function
Team</small></td>
      <td style="vertical-align: top; width: 319px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->team}}  <br>
      </small></td>
      <td style="vertical-align: top; width: 186px;"><small>Conficentiality
Level</small></td>
      <td style="vertical-align: top; width: 327px; background-color: rgb(255, 255, 153);"><small>:{{$fmea->level}}  <br>
      </small></td>
    </tr>
  </tbody>
</table>
<br>
<small>
<small>
<table style="text-align: left; border-collapse: collapse; width: 4000px;" border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td style="vertical-align: top; text-align: center;"><br>
      </td>
      <td style="vertical-align: top; text-align: center; width: 65px;">Continuous
improvement</td>
      <td colspan="3" style="vertical-align: top; text-align: center; width: 0px;"><b>STRUCTURE
ANALYSIS</b> (Step 2)</td>
      <td colspan="3" style="vertical-align: top; text-align: center;"><strong>FUNCTION
ANALYSIS</strong> (Step 3)</td>
      <td colspan="4" style="vertical-align: top; text-align: center; width: 620px;"><strong>FAILURE
ANALYSIS</strong> (Step 4)</td>
      <td colspan="7" style="vertical-align: top; text-align: center; width: 117px;"><strong>RISK
ANALYSIS</strong> (Step 5)</td>
      <td colspan="12" style="vertical-align: top; text-align: center;"><strong>OPTIMATION</strong>
(Step 6)</td>
      <td style="vertical-align: top; text-align: center;"><br>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top; text-align: center; width: 34px;">Isuue#</td>
      <td style="vertical-align: top; text-align: center; width: 65px; background-color: rgb(255, 255, 153);">History</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 204, 204);">1.
Process Item System, Subsystem, Part Element or Name Process</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 255, 255);">2.
Process Step Station No. and Name of Focus Element</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 204, 255);">3.
Process Work Element 4M Type</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 204, 204);">1.
Function of the Process Item Function of System, Subsystem, Part
Element or Process</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 255, 255);">2.
Function of the Process Step and Product Characteristic (Quantitative
value is optional)</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 204, 255);">3.
Function of the Process Work Element and Process Characteristic</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 204, 204);">1.
Failure Effects (FE) to the Next Higher Level Element and/or End User</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 0);">Severity
(S) of FE</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 255, 255);">2.
Failure Mode (FM) of the Process Step</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(204, 204, 255);">3.
Failure Cause (FC) of the Work Element</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(51, 204, 0);">Current
Prevention Control (PC) of FC</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 0);">Occurrence
(O) of FC</td>
      <td style="vertical-align: top; text-align: center; width: 200px; background-color: rgb(51, 204, 0);">Current
Detection Controls (DC) of FC or FM</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 0);">Detection
(D) of FC/FM</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 0);">PFMEA
AP</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 255);">Spec.
Char.</td>
      <td style="vertical-align: top; text-align: center; width: 20px;">Filtercode
(Optional)</td>
      <td style="vertical-align: top; text-align: center; width: 200px;">Prevention
Action</td>
      <td style="vertical-align: top; text-align: center; width: 200px;">Detection
Action</td>
      <td style="vertical-align: top; text-align: center; width: 100px;">Responsible
Person's Name</td>
      <td style="vertical-align: top; text-align: center; width: 100px;">Target
Completion Date</td>
      <td style="vertical-align: top; text-align: center; width: 50px;">Status</td>
      <td style="vertical-align: top; text-align: center; width: 200px;">Action
Taken witd Pointer to Evidence</td>
      <td style="vertical-align: top; text-align: center; width: 100px;">Completion
Date</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 0);">Severity
(S)</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 0);">Occurrence
(O)</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 0);">Detection
(D)</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 0);">PFMEA
AP</td>
      <td style="vertical-align: top; text-align: center; width: 20px; background-color: rgb(51, 204, 255);">Spec.
Char.</td>
      <td style="vertical-align: top; text-align: left; width: 40px;">Remarks</td>
    </tr>    
@foreach ($datas as $item)    
    <tr>
    <td style="vertical-align: top;"><br>
      </td>
      <td style="vertical-align: top;"><br>
      </td>
      <td style="vertical-align: top;">{{$item->process}}
      </td>
      <td style="vertical-align: top;">{{$item->step}}
      </td>
      <td style="vertical-align: top;">Man: {{$item->man}}<br>Machine: {{$item->machine}}<br>Material: {{$item->material}}<br>Method: {{$item->method}}<br>
      </td>
      <td style="vertical-align: top;">Your Plan: {{$item->process_function}}<br>Ship to Plant: {{$item->process_function2}}<br>End User: {{$item->process_function3}}
      </td>
      <td style="vertical-align: top;">{{$item->step_function}}
      </td>
      <td style="vertical-align: top;">Man: {{$item->man_function}}<br>Machine: {{$item->machine_function}}<br>Material: {{$item->material_function}}<br>Method: {{$item->method_function}}<br>
      </td>
      <td style="vertical-align: top;">In Line: {{$item->effect_in}}<br>Next Process: {{$item->effect_next}}<br>Customer/ End User: {{$item->effect_end}}<br>
      </td>
      <td style="vertical-align: top;">{{$item->s}}
      </td>
      <td style="vertical-align: top;">{{$item->failure}}
      </td>
      <td style="vertical-align: top;">{{$item->element}}:<br> {{$item->cause}}
      </td>
      <td style="vertical-align: top;">{{$item->prevention}}
      </td>
      <td style="vertical-align: top;">{{$item->o}}
      </td>
      <td style="vertical-align: top;">{{$item->detection}}
      </td>
      <td style="vertical-align: top;">{{$item->d}}
      </td>
      <td style="vertical-align: top;">{{$item->ap}}
      </td>
      <td style="vertical-align: top;">{{$item->sc}}
      </td>
      <td style="vertical-align: top;"><br>
      </td>
      <td style="vertical-align: top;">{{$item->prevention_plan}}
      </td>
      <td style="vertical-align: top;">{{$item->detection_plan}}
      </td>
      <td style="vertical-align: top;">{{$item->pic}}
      </td>
      <td style="vertical-align: top;">{{$item->target_date}}
      </td>
      <td style="vertical-align: top;">{{$item->status}}
      </td>
      <td style="vertical-align: top;">{{$item->prevention_act}}<br/>{{$item->detection_act}}
      </td>
      <td style="vertical-align: top;">{{$item->finish_date}}
      </td>
      <td style="vertical-align: top;">{{$item->s}}
      </td>
      <td style="vertical-align: top;">{{$item->o2}}
      </td>
      <td style="vertical-align: top;">{{$item->d2}}
      </td>
      <td style="vertical-align: top;">{{$item->ap2}}
      </td>
      <td style="vertical-align: top;">{{$item->sc2}}
      </td>
      <td style="vertical-align: top;">{{$item->action}}
      </td>
    </tr>
@endforeach
  </tbody>
</table>
</small>
</small>
<br>
</div>

</body></html>