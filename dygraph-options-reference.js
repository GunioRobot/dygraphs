// Copyright 2011 Dan Vanderkam (danvdk@gmail.com)
// MIT-licensed (http://opensource.org/licenses/MIT)

// NOTE: in addition to parsing as JS, this snippet is expected to be valid
// JSON. This assumption cannot be checked in JS, but it will be checked when
// documentation is generated by the generate-documentation.py script. For the
// most part, this just means that you should always use double quotes.
Dygraph.OPTIONS_REFERENCE =  // <JSON>
{
  "xValueParser": {
    "default": "parseFloat() or Date.parse()*",
    "labels": ["CSV parsing"],
    "type": "function(str) -> number",
    "description": "A function which parses x-values (i.e. the dependent series). Must return a number, even when the values are dates. In this case, millis since epoch are used. This is used primarily for parsing CSV data. *=Dygraphs is slightly more accepting in the dates which it will parse. See code for details."
  },
  "stackedGraph": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "If set, stack series on top of one another rather than drawing them independently."
  },
  "pointSize": {
    "default": "1",
    "labels": ["Data Line display"],
    "type": "integer",
    "description": "The size of the dot to draw on each point in pixels (see drawPoints). A dot is always drawn when a point is \"isolated\", i.e. there is a missing point on either side of it. This also controls the size of those dots."
  },
  "labelsDivStyles": {
    "default": "null",
    "labels": ["Legend"],
    "type": "{}",
    "description": "Additional styles to apply to the currently-highlighted points div. For example, { 'font-weight': 'bold' } will make the labels bold."
  },
  "drawPoints": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "Draw a small dot at each point, in addition to a line going through the point. This makes the individual data points easier to see, but can increase visual clutter in the chart."
  },
  "height": {
    "default": "320",
    "labels": ["Overall display"],
    "type": "integer",
    "description": "Height, in pixels, of the chart. If the container div has been explicitly sized, this will be ignored."
  },
  "zoomCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(minDate, maxDate, yRanges)",
    "description": "A function to call when the zoom window is changed (either by zooming in or out). minDate and maxDate are milliseconds since epoch. yRanges is an array of [bottom, top] pairs, one for each y-axis."
  },
  "pointClickCallback": {
    "snippet": "function(e, point){<br>&nbsp;&nbsp;alert(point);<br>}",
    "default": "null",
    "labels": ["Callbacks", "Interactive Elements"],
    "type": "function(e, point)",
    "description": "A function to call when a data point is clicked. The function should take two arguments, the event object for the click, and the point that was clicked. The 'point' argument has these properties:\n * xval/yval: The data coordinates of the point (with dates/times as millis since epoch) \n * canvasx/canvasy: The canvas coordinates at which the point is drawn. \n name: The name of the data series to which the point belongs"
  },
  "colors": {
    "default": "(see description)",
    "labels": ["Data Series Colors"],
    "type": "array<string>",
    "example": "['red', '#00FF00']",
    "description": "List of colors for the data series. These can be of the form \"#AABBCC\" or \"rgb(255,100,200)\" or \"yellow\", etc. If not specified, equally-spaced points around a color wheel are used."
  },
  "connectSeparatedPoints": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "Usually, when Dygraphs encounters a missing value in a data series, it interprets this as a gap and draws it as such. If, instead, the missing values represents an x-value for which only a different series has data, then you'll want to connect the dots by setting this to true. To explicitly include a gap with this option set, use a value of NaN."
  },
  "highlightCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(event, x, points,row)",
    "description": "When set, this callback gets called every time a new point is highlighted. The parameters are the JavaScript mousemove event, the x-coordinate of the highlighted points and an array of highlighted points: <code>[ {name: 'series', yval: y-value}, &hellip; ]</code>"
  },
  "includeZero": {
    "default": "false",
    "labels": ["Axis display"],
    "type": "boolean",
    "description": "Usually, dygraphs will use the range of the data plus some padding to set the range of the y-axis. If this option is set, the y-axis will always include zero, typically as the lowest value. This can be used to avoid exaggerating the variance in the data"
  },
  "rollPeriod": {
    "default": "1",
    "labels": ["Error Bars", "Rolling Averages"],
    "type": "integer &gt;= 1",
    "description": "Number of days over which to average data. Discussed extensively above."
  },
  "unhighlightCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(event)",
    "description": "When set, this callback gets called every time the user stops highlighting any point by mousing out of the graph.  The parameter is the mouseout event."
  },
  "axisTickSize": {
    "default": "3.0",
    "labels": ["Axis display"],
    "type": "number",
    "description": "The size of the line to display next to each tick mark on x- or y-axes."
  },
  "labelsSeparateLines": {
    "default": "false",
    "labels": ["Legend"],
    "type": "boolean",
    "description": "Put <code>&lt;br/&gt;</code> between lines in the label string. Often used in conjunction with <strong>labelsDiv</strong>."
  },
  "xValueFormatter": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes: { x: { valueFormatter } }"
  },
  "valueFormatter": {
    "default": "Depends on the type of your data.",
    "labels": ["Legend", "Value display/formatting"],
    "type": "function(num or millis, opts, dygraph)",
    "description": "Function to provide a custom display format for the values displayed on mouseover. This does not affect the values that appear on tick marks next to the axes. To format those, see axisLabelFormatter. This is usually set on a <a href='per-axis.html'>per-axis</a> basis. For date axes, you can call new Date(millis) to get a Date object. opts is a function you can call to access various options (e.g. opts('labelsKMB'))."
  },
  "pixelsPerYLabel": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "integer",
    "description": "Prefer axes: { y: { pixelsPerLabel } }"
  },
  "annotationMouseOverHandler": {
    "default": "null",
    "labels": ["Annotations"],
    "type": "function(annotation, point, dygraph, event)",
    "description": "If provided, this function is called whenever the user mouses over an annotation."
  },
  "annotationMouseOutHandler": {
    "default": "null",
    "labels": ["Annotations"],
    "type": "function(annotation, point, dygraph, event)",
    "description": "If provided, this function is called whenever the user mouses out of an annotation."
  },
  "annotationClickHandler": {
    "default": "null",
    "labels": ["Annotations"],
    "type": "function(annotation, point, dygraph, event)",
    "description": "If provided, this function is called whenever the user clicks on an annotation."
  },
  "annotationDblClickHandler": {
    "default": "null",
    "labels": ["Annotations"],
    "type": "function(annotation, point, dygraph, event)",
    "description": "If provided, this function is called whenever the user double-clicks on an annotation."
  },
  "drawCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(dygraph, is_initial)",
    "description": "When set, this callback gets called every time the dygraph is drawn. This includes the initial draw, after zooming and repeatedly while panning. The first parameter is the dygraph being drawn. The second is a boolean value indicating whether this is the initial draw."
  },
  "labelsKMG2": {
    "default": "false",
    "labels": ["Value display/formatting"],
    "type": "boolean",
    "description": "Show k/M/G for kilo/Mega/Giga on y-axis. This is different than <code>labelsKMB</code> in that it uses base 2, not 10."
  },
  "delimiter": {
    "default": ",",
    "labels": ["CSV parsing"],
    "type": "string",
    "description": "The delimiter to look for when separating fields of a CSV file. Setting this to a tab is not usually necessary, since tab-delimited data is auto-detected."
  },
  "axisLabelFontSize": {
    "default": "14",
    "labels": ["Axis display"],
    "type": "integer",
    "description": "Size of the font (in pixels) to use in the axis labels, both x- and y-axis."
  },
  "underlayCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(canvas, area, dygraph)",
    "description": "When set, this callback gets called before the chart is drawn. It details on how to use this."
  },
  "width": {
    "default": "480",
    "labels": ["Overall display"],
    "type": "integer",
    "description": "Width, in pixels, of the chart. If the container div has been explicitly sized, this will be ignored."
  },
  "interactionModel": {
    "default": "...",
    "labels": ["Interactive Elements"],
    "type": "Object",
    "description": "TODO(konigsberg): document this"
  },
  "xTicker": {
    "default": "Dygraph.dateTicker or Dygraph.numericTicks",
    "labels": ["Axis display"],
    "type": "function(min, max, pixels, opts, dygraph, vals) -> [{v: ..., label: ...}, ...]",
    "description": "This lets you specify an arbitrary function to generate tick marks on an axis. The tick marks are an array of (value, label) pairs. The built-in functions go to great lengths to choose good tick marks so, if you set this option, you'll most likely want to call one of them and modify the result. See dygraph-tickers.js for an extensive discussion."
  },
  "xTicker": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes: { x: { ticker } }"
  },
  "xAxisLabelWidth": {
    "default": "50",
    "labels": ["Axis display"],
    "type": "integer",
    "description": "Width, in pixels, of the x-axis labels."
  },
  "xAxisHeight": {
    "default": "(null)",
    "labels": ["Axis display"],
    "type": "integer",
    "description": "Height, in pixels, of the x-axis. If not set explicitly, this is computed based on axisLabelFontSize and axisTickSize."
  },
  "showLabelsOnHighlight": {
    "default": "true",
    "labels": ["Interactive Elements", "Legend"],
    "type": "boolean",
    "description": "Whether to show the legend upon mouseover."
  },
  "axis": {
    "default": "(none)",
    "labels": ["Axis display"],
    "type": "string or object",
    "description": "Set to either an object ({}) filled with options for this axis or to the name of an existing data series with its own axis to re-use that axis. See tests for usage."
  },
  "pixelsPerXLabel": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "integer",
    "description": "Prefer axes { x: { pixelsPerLabel } }"
  },
  "pixelsPerLabel": {
    "default": "60 (x-axis) or 30 (y-axes)",
    "labels": ["Axis display", "Grid"],
    "type": "integer",
    "description": "Number of pixels to require between each x- and y-label. Larger values will yield a sparser axis with fewer ticks. This is set on a <a href='per-axis.html'>per-axis</a> basis."
  },
  "labelsDiv": {
    "default": "null",
    "labels": ["Legend"],
    "type": "DOM element or string",
    "example": "<code style='font-size: small'>document.getElementById('foo')</code>or<code>'foo'",
    "description": "Show data labels in an external div, rather than on the graph.  This value can either be a div element or a div id."
  },
  "fractions": {
    "default": "false",
    "labels": ["CSV parsing", "Error Bars"],
    "type": "boolean",
    "description": "When set, attempt to parse each cell in the CSV file as \"a/b\", where a and b are integers. The ratio will be plotted. This allows computation of Wilson confidence intervals (see below)."
  },
  "logscale": {
    "default": "false",
    "labels": ["Axis display"],
    "type": "boolean",
    "description": "When set for a y-axis, the graph shows that axis in log scale. Any values less than or equal to zero are not displayed.\n\nNot compatible with showZero, and ignores connectSeparatedPoints. Also, showing log scale with valueRanges that are less than zero will result in an unviewable graph."
  },
  "strokeWidth": {
    "default": "1.0",
    "labels": ["Data Line display"],
    "type": "integer",
    "example": "0.5, 2.0",
    "description": "The width of the lines connecting data points. This can be used to increase the contrast or some graphs."
  },
  "wilsonInterval": {
    "default": "true",
    "labels": ["Error Bars"],
    "type": "boolean",
    "description": "Use in conjunction with the \"fractions\" option. Instead of plotting +/- N standard deviations, dygraphs will compute a Wilson confidence interval and plot that. This has more reasonable behavior for ratios close to 0 or 1."
  },
  "fillGraph": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "Should the area underneath the graph be filled? This option is not compatible with error bars."
  },
  "highlightCircleSize": {
    "default": "3",
    "labels": ["Interactive Elements"],
    "type": "integer",
    "description": "The size in pixels of the dot drawn over highlighted points."
  },
  "gridLineColor": {
    "default": "rgb(128,128,128)",
    "labels": ["Grid"],
    "type": "red, blue",
    "description": "The color of the gridlines."
  },
  "visibility": {
    "default": "[true, true, ...]",
    "labels": ["Data Line display"],
    "type": "Array of booleans",
    "description": "Which series should initially be visible? Once the Dygraph has been constructed, you can access and modify the visibility of each series using the <code>visibility</code> and <code>setVisibility</code> methods."
  },
  "valueRange": {
    "default": "Full range of the input is shown",
    "labels": ["Axis display"],
    "type": "Array of two numbers",
    "example": "[10, 110]",
    "description": "Explicitly set the vertical range of the graph to [low, high]."
  },
  "labelsDivWidth": {
    "default": "250",
    "labels": ["Legend"],
    "type": "integer",
    "description": "Width (in pixels) of the div which shows information on the currently-highlighted points."
  },
  "colorSaturation": {
    "default": "1.0",
    "labels": ["Data Series Colors"],
    "type": "float (0.0 - 1.0)",
    "description": "If <strong>colors</strong> is not specified, saturation of the automatically-generated data series colors."
  },
  "yAxisLabelWidth": {
    "default": "50",
    "labels": ["Axis display"],
    "type": "integer",
    "description": "Width, in pixels, of the y-axis labels. This also affects the amount of space available for a y-axis chart label."
  },
  "hideOverlayOnMouseOut": {
    "default": "true",
    "labels": ["Interactive Elements", "Legend"],
    "type": "boolean",
    "description": "Whether to hide the legend when the mouse leaves the chart area."
  },
  "yValueFormatter": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes: { y: { valueFormatter } }"
  },
  "legend": {
    "default": "onmouseover",
    "labels": ["Legend"],
    "type": "string",
    "description": "When to display the legend. By default, it only appears when a user mouses over the chart. Set it to \"always\" to always display a legend of some sort."
  },
  "labelsShowZeroValues": {
    "default": "true",
    "labels": ["Legend"],
    "type": "boolean",
    "description": "Show zero value labels in the labelsDiv."
  },
  "stepPlot": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "When set, display the graph as a step plot instead of a line plot."
  },
  "labelsKMB": {
    "default": "false",
    "labels": ["Value display/formatting"],
    "type": "boolean",
    "description": "Show K/M/B for thousands/millions/billions on y-axis."
  },
  "rightGap": {
    "default": "5",
    "labels": ["Overall display"],
    "type": "integer",
    "description": "Number of pixels to leave blank at the right edge of the Dygraph. This makes it easier to highlight the right-most data point."
  },
  "avoidMinZero": {
    "default": "false",
    "labels": ["Axis display"],
    "type": "boolean",
    "description": "When set, the heuristic that fixes the Y axis at zero for a data set with the minimum Y value of zero is disabled. \nThis is particularly useful for data sets that contain many zero values, especially for step plots which may otherwise have lines not visible running along the bottom axis."
  },
  "xAxisLabelFormatter": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes { x: { axisLabelFormatter } }"
  },
  "axisLabelFormatter": {
    "default": "Depends on the data type",
    "labels": ["Axis display"],
    "type": "function(number or Date, granularity, opts, dygraph)",
    "description": "Function to call to format the tick values that appear along an axis. This is usually set on a <a href='per-axis.html'>per-axis</a> basis. The first parameter is either a number (for a numeric axis) or a Date object (for a date axis). The second argument specifies how fine-grained the axis is. For date axes, this is a reference to the time granularity enumeration, defined in dygraph-tickers.js, e.g. Dygraph.WEEKLY. opts is a function which provides access to various options on the dygraph, e.g. opts('labelsKMB')."
  },
  "clickCallback": {
    "snippet": "function(e, date_millis){<br>&nbsp;&nbsp;alert(new Date(date_millis));<br>}",
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(e, x, points)",
    "description": "A function to call when the canvas is clicked. The function should take three arguments, the event object for the click, the x-value that was clicked (for dates this is millis since epoch), and the closest points along that date. The points have these properties:\n * xval/yval: The data coordinates of the point (with dates/times as millis since epoch) \n * canvasx/canvasy: The canvas coordinates at which the point is drawn. \n name: The name of the data series to which the point belongs"
  },
  "yAxisLabelFormatter": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes: { y: { axisLabelFormatter } }"
  },
  "labels": {
    "default": "[\"X\", \"Y1\", \"Y2\", ...]*",
    "labels": ["Legend"],
    "type": "array<string>",
    "description": "A name for each data series, including the independent (X) series. For CSV files and DataTable objections, this is determined by context. For raw data, this must be specified. If it is not, default values are supplied and a warning is logged."
  },
  "dateWindow": {
    "default": "Full range of the input is shown",
    "labels": ["Axis display"],
    "type": "Array of two Dates or numbers",
    "example": "[<br>&nbsp;&nbsp;Date.parse('2006-01-01'),<br>&nbsp;&nbsp;(new Date()).valueOf()<br>]",
    "description": "Initially zoom in on a section of the graph. Is of the form [earliest, latest], where earliest/latest are milliseconds since epoch. If the data for the x-axis is numeric, the values in dateWindow must also be numbers."
  },
  "showRoller": {
    "default": "false",
    "labels": ["Interactive Elements", "Rolling Averages"],
    "type": "boolean",
    "description": "If the rolling average period text box should be shown."
  },
  "sigma": {
    "default": "2.0",
    "labels": ["Error Bars"],
    "type": "float",
    "description": "When errorBars is set, shade this many standard deviations above/below each point."
  },
  "customBars": {
    "default": "false",
    "labels": ["CSV parsing", "Error Bars"],
    "type": "boolean",
    "description": "When set, parse each CSV cell as \"low;middle;high\". Error bars will be drawn for each point between low and high, with the series itself going through middle."
  },
  "colorValue": {
    "default": "1.0",
    "labels": ["Data Series Colors"],
    "type": "float (0.0 - 1.0)",
    "description": "If colors is not specified, value of the data series colors, as in hue/saturation/value. (0.0-1.0, default 0.5)"
  },
  "errorBars": {
    "default": "false",
    "labels": ["CSV parsing", "Error Bars"],
    "type": "boolean",
    "description": "Does the data contain standard deviations? Setting this to true alters the input format (see above)."
  },
  "displayAnnotations": {
    "default": "false",
    "labels": ["Annotations"],
    "type": "boolean",
    "description": "Only applies when Dygraphs is used as a GViz chart. Causes string columns following a data series to be interpreted as annotations on points in that series. This is the same format used by Google's AnnotatedTimeLine chart."
  },
  "panEdgeFraction": {
    "default": "null",
    "labels": ["Axis display", "Interactive Elements"],
    "type": "float",
    "default": "null",
    "description": "A value representing the farthest a graph may be panned, in percent of the display. For example, a value of 0.1 means that the graph can only be panned 10% pased the edges of the displayed values. null means no bounds."
  },
  "title": {
    "labels": ["Chart labels"],
    "type": "string",
    "default": "null",
    "description": "Text to display above the chart. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the 'dygraph-label' or 'dygraph-title' classes."
  },
  "titleHeight": {
    "default": "18",
    "labels": ["Chart labels"],
    "type": "integer",
    "description": "Height of the chart title, in pixels. This also controls the default font size of the title. If you style the title on your own, this controls how much space is set aside above the chart for the title's div."
  },
  "xlabel": {
    "labels": ["Chart labels"],
    "type": "string",
    "default": "null",
    "description": "Text to display below the chart's x-axis. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the 'dygraph-label' or 'dygraph-xlabel' classes."
  },
  "xLabelHeight": {
    "labels": ["Chart labels"],
    "type": "integer",
    "default": "18",
    "description": "Height of the x-axis label, in pixels. This also controls the default font size of the x-axis label. If you style the label on your own, this controls how much space is set aside below the chart for the x-axis label's div."
  },
  "ylabel": {
    "labels": ["Chart labels"],
    "type": "string",
    "default": "null",
    "description": "Text to display to the left of the chart's y-axis. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the 'dygraph-label' or 'dygraph-ylabel' classes. The text will be rotated 90 degrees by default, so CSS rules may behave in unintuitive ways. No additional space is set aside for a y-axis label. If you need more space, increase the width of the y-axis tick labels using the yAxisLabelWidth option. If you need a wider div for the y-axis label, either style it that way with CSS (but remember that it's rotated, so width is controlled by the 'height' property) or set the yLabelWidth option."
  },
  "yLabelWidth": {
    "labels": ["Chart labels"],
    "type": "integer",
    "default": "18",
    "description": "Width of the div which contains the y-axis label. Since the y-axis label appears rotated 90 degrees, this actually affects the height of its div."
  },
  "isZoomedIgnoreProgrammaticZoom" : {
    "default": "false",
    "labels": ["Zooming"],
    "type": "boolean",
    "description" : "When this option is passed to updateOptions() along with either the <code>dateWindow</code> or <code>valueRange</code> options, the zoom flags are not changed to reflect a zoomed state. This is primarily useful for when the display area of a chart is changed programmatically and also where manual zooming is allowed and use is made of the <code>isZoomed</code> method to determine this."
  },
  "drawXGrid": {
    "default": "true",
    "labels": ["Grid"],
    "type": "boolean",
    "description" : "Whether to display vertical gridlines under the chart."
  },
  "drawYGrid": {
    "default": "true",
    "labels": ["Grid"],
    "type": "boolean",
    "description" : "Whether to display horizontal gridlines under the chart."
  },
  "drawXAxis": {
    "default": "true",
    "labels": ["Axis display"],
    "type": "boolean",
    "description" : "Whether to draw the x-axis. Setting this to false also prevents x-axis ticks from being drawn and reclaims the space for the chart grid/lines."
  },
  "drawYAxis": {
    "default": "true",
    "labels": ["Axis display"],
    "type": "boolean",
    "description" : "Whether to draw the y-axis. Setting this to false also prevents y-axis ticks from being drawn and reclaims the space for the chart grid/lines."
  },
  "gridLineWidth": {
    "default": "0.3",
    "labels": ["Grid"],
    "type": "float",
    "description" : "Thickness (in pixels) of the gridlines drawn under the chart. The vertical/horizontal gridlines can be turned off entirely by using the drawXGrid and drawYGrid options."
  },
  "axisLineWidth": {
    "default": "0.3",
    "labels": ["Axis display"],
    "type": "float",
    "description" : "Thickness (in pixels) of the x- and y-axis lines."
  },
  "axisLineColor": {
    "default": "black",
    "labels": ["Axis display"],
    "type": "string",
    "description" : "Color of the x- and y-axis lines. Accepts any value which the HTML canvas strokeStyle attribute understands, e.g. 'black' or 'rgb(0, 100, 255)'."
  },
  "fillAlpha": {
    "default": "0.15",
    "labels": ["Error Bars", "Data Series Colors"],
    "type": "float (0.0 - 1.0)",
    "description" : "Error bars (or custom bars) for each series are drawn in the same color as the series, but with partial transparency. This sets the transparency. A value of 0.0 means that the error bars will not be drawn, whereas a value of 1.0 means that the error bars will be as dark as the line for the series itself. This can be used to produce chart lines whose thickness varies at each point."
  },
  "axisLabelColor": {
    "default": "black",
    "labels": ["Axis display"],
    "type": "string",
    "description" : "Color for x- and y-axis labels. This is a CSS color string."
  },
  "axisLabelWidth": {
    "default": "50",
    "labels": ["Axis display", "Chart labels"],
    "type": "integer",
    "description" : "Width (in pixels) of the containing divs for x- and y-axis labels. For the y-axis, this also controls "
  },
  "sigFigs" : {
    "default": "null",
    "labels": ["Value display/formatting"],
    "type": "integer",
    "description": "By default, dygraphs displays numbers with a fixed number of digits after the decimal point. If you'd prefer to have a fixed number of significant figures, set this option to that number of sig figs. A value of 2, for instance, would cause 1 to be display as 1.0 and 1234 to be displayed as 1.23e+3."
  },
  "digitsAfterDecimal" : {
    "default": "2",
    "labels": ["Value display/formatting"],
    "type": "integer",
    "description": "Unless it's run in scientific mode (see the <code>sigFigs</code> option), dygraphs displays numbers with <code>digitsAfterDecimal</code> digits after the decimal point. Trailing zeros are not displayed, so with a value of 2 you'll get '0', '0.1', '0.12', '123.45' but not '123.456' (it will be rounded to '123.46'). Numbers with absolute value less than 0.1^digitsAfterDecimal (i.e. those which would show up as '0.00') will be displayed in scientific notation."
  },
  "maxNumberWidth" : {
    "default": "6",
    "labels": ["Value display/formatting"],
    "type": "integer",
    "description": "When displaying numbers in normal (not scientific) mode, large numbers will be displayed with many trailing zeros (e.g. 100000000 instead of 1e9). This can lead to unwieldy y-axis labels. If there are more than <code>maxNumberWidth</code> digits to the left of the decimal in a number, dygraphs will switch to scientific notation, even when not operating in scientific mode. If you'd like to see all those digits, set this to something large, like 20 or 30."
  },
  "file": {
    "default": "(set when constructed)",
    "labels": ["Data"],
    "type": "string (URL of CSV or CSV), GViz DataTable or 2D Array",
    "description": "Sets the data being displayed in the chart. This can only be set when calling updateOptions; it cannot be set from the constructor. For a full description of valid data formats, see the <a href='http://dygraphs.com/data.html'>Data Formats</a> page."
  },
  "timingName": {
    "default": "null",
    "labels": [ "Debugging" ],
    "type": "string",
    "description": "Set this option to log timing information. The value of the option will be logged along with the timimg, so that you can distinguish multiple dygraphs on the same page."
  }
}
;  // </JSON>
// NOTE: in addition to parsing as JS, this snippet is expected to be valid
// JSON. This assumption cannot be checked in JS, but it will be checked when
// documentation is generated by the generate-documentation.py script. For the
// most part, this just means that you should always use double quotes.

// Do a quick sanity check on the options reference.
(function() {
  var warn = function(msg) { if (console) console.warn(msg); };
  var flds = ['type', 'default', 'description'];
  var valid_cats = [ 
   'Annotations',
   'Axis display',
   'Chart labels',
   'CSV parsing',
   'Callbacks',
   'Data',
   'Data Line display',
   'Data Series Colors',
   'Error Bars',
   'Grid',
   'Interactive Elements',
   'Legend',
   'Overall display',
   'Rolling Averages',
   'Value display/formatting',
   'Zooming',
   'Debugging',
   'Deprecated'
  ];
  var cats = {};
  for (var i = 0; i < valid_cats.length; i++) cats[valid_cats[i]] = true;

  for (var k in Dygraph.OPTIONS_REFERENCE) {
    if (!Dygraph.OPTIONS_REFERENCE.hasOwnProperty(k)) continue;
    var op = Dygraph.OPTIONS_REFERENCE[k];
    for (var i = 0; i < flds.length; i++) {
      if (!op.hasOwnProperty(flds[i])) {
        warn('Option ' + k + ' missing "' + flds[i] + '" property');
      } else if (typeof(op[flds[i]]) != 'string') {
        warn(k + '.' + flds[i] + ' must be of type string');
      }
    }
    var labels = op['labels'];
    if (typeof(labels) !== 'object') {
      warn('Option "' + k + '" is missing a "labels": [...] option');
    } else {
      for (var i = 0; i < labels.length; i++) {
        if (!cats.hasOwnProperty(labels[i])) {
          warn('Option "' + k + '" has label "' + labels[i] +
               '", which is invalid.');
        }
      }
    }
  }
})();
