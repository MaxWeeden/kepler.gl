"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

exports.default = "#define SHADER_NAME arc-layer-vertex-shader-64\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\n\nattribute vec4 instancePositions;\nattribute vec4 instancePositions64Low;\n\nattribute vec3 instancePickingColors;\n\nattribute float instanceStrokeWidth;\n\nuniform float numSegments;\nuniform float strokeScale;\nuniform float opacity;\nuniform float renderPickingBuffer;\nuniform vec4 pickedColor;\n\nuniform float enableBrushing;\nuniform float brushSource;\nuniform float brushTarget;\n\nvarying vec4 vColor;\n\nvec2 paraboloid_fp64(vec2 source[2], vec2 target[2], float ratio) {\n\n  vec2 x[2];\n  vec2_mix_fp64(source, target, ratio, x);\n  vec2 center[2];\n  vec2_mix_fp64(source, target, 0.5, center);\n\n  vec2 dSourceCenter = vec2_distance_fp64(source, center);\n  vec2 dXCenter = vec2_distance_fp64(x, center);\n  return mul_fp64(sum_fp64(dSourceCenter, dXCenter), sub_fp64(dSourceCenter, dXCenter));\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvoid get_pos_fp64(vec2 source[2], vec2 target[2], float segmentRatio, out vec2 position[4]) {\n\n  vec2 vertex_height = paraboloid_fp64(source, target, segmentRatio);\n\n  vec2 position_temp[2];\n\n  vec2_mix_fp64(source, target, segmentRatio, position_temp);\n\n  position[0] = position_temp[0];\n  position[1] = position_temp[1];\n\n  if (vertex_height.x < 0.0 || (vertex_height.x == 0.0 && vertex_height.y <= 0.0)) {\n    vertex_height = vec2(0.0, 0.0);\n  }\n\n  position[2] = sqrt_fp64(vertex_height);\n  position[3] = vec2(1.0, 0.0);\n}\n\nvoid main(void) {\n  vec4 instanceSourcePositions64 = vec4(instancePositions.x,\n    instancePositions64Low.x, instancePositions.y, instancePositions64Low.y);\n  vec4 instanceTargetPositions64 = vec4(instancePositions.z,\n    instancePositions64Low.z, instancePositions.w, instancePositions64Low.w);\n\n  vec2 projected_source_coord[2];\n  vec2 projected_target_coord[2];\n\n  project_position_fp64(instanceSourcePositions64, projected_source_coord);\n  project_position_fp64(instanceTargetPositions64, projected_target_coord);\n\n  // if not enabled isPointInRange will always return true\n  float isSourceInBrush = isPointInRange(instancePositions.xy, brushSource);\n  float isTargetInBrush = isPointInRange(instancePositions.zw, brushTarget);\n\n  float isInBrush = float(enableBrushing <= 0. ||\n  (brushSource * isSourceInBrush > 0. || brushTarget * isTargetInBrush > 0.));\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n\n  // if it's the first point, use next - current as direction\n  // otherwise use current - prev\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);\n\n  vec2 curr_pos_modelspace[4];\n\n  get_pos_fp64(projected_source_coord, projected_target_coord, segmentRatio,\n    curr_pos_modelspace);\n\n  vec2 next_pos_modelspace[4];\n\n  get_pos_fp64(projected_source_coord, projected_target_coord, nextSegmentRatio,\n    next_pos_modelspace);\n\n  vec4 curr_pos_clipspace = project_to_clipspace_fp64(curr_pos_modelspace);\n  vec4 next_pos_clipspace = project_to_clipspace_fp64(next_pos_modelspace);\n  // mix strokeWidth with brush, if not in brush, return 0\n  float strokeWidth = strokeScale * instanceStrokeWidth;\n  float finalWidth = mix(0.0, strokeWidth, isInBrush);\n\n  vec2 offset = getExtrusionOffset(next_pos_clipspace.xy - curr_pos_clipspace.xy, positions.y, finalWidth);\n\n  gl_Position = curr_pos_clipspace + vec4(offset, 0.0, 0.0);\n\n  float picked = isPicked(instancePickingColors);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio) / 255.;\n  vec4 finalColor = mix(color, pickedColor / 255., picked);\n\n  vColor = mix(\n    vec4(color.rgb, color.a * opacity),\n    vec4(instancePickingColors / 255., 1.),\n    renderPickingBuffer\n  );\n}\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2FyYy1icnVzaGluZy1sYXllci9hcmMtYnJ1c2hpbmctbGF5ZXItdmVydGV4LTY0Lmdsc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcmMtYnJ1c2hpbmctbGF5ZXItdmVydGV4LTY0Lmdsc2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTUgLSAyMDE3IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuZXhwb3J0IGRlZmF1bHQgYFxcXG4jZGVmaW5lIFNIQURFUl9OQU1FIGFyYy1sYXllci12ZXJ0ZXgtc2hhZGVyLTY0XG5cbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9ucztcbmF0dHJpYnV0ZSB2ZWM0IGluc3RhbmNlU291cmNlQ29sb3JzO1xuYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VUYXJnZXRDb2xvcnM7XG5cbmF0dHJpYnV0ZSB2ZWM0IGluc3RhbmNlUG9zaXRpb25zO1xuYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VQb3NpdGlvbnM2NExvdztcblxuYXR0cmlidXRlIHZlYzMgaW5zdGFuY2VQaWNraW5nQ29sb3JzO1xuXG5hdHRyaWJ1dGUgZmxvYXQgaW5zdGFuY2VTdHJva2VXaWR0aDtcblxudW5pZm9ybSBmbG9hdCBudW1TZWdtZW50cztcbnVuaWZvcm0gZmxvYXQgc3Ryb2tlU2NhbGU7XG51bmlmb3JtIGZsb2F0IG9wYWNpdHk7XG51bmlmb3JtIGZsb2F0IHJlbmRlclBpY2tpbmdCdWZmZXI7XG51bmlmb3JtIHZlYzQgcGlja2VkQ29sb3I7XG5cbnVuaWZvcm0gZmxvYXQgZW5hYmxlQnJ1c2hpbmc7XG51bmlmb3JtIGZsb2F0IGJydXNoU291cmNlO1xudW5pZm9ybSBmbG9hdCBicnVzaFRhcmdldDtcblxudmFyeWluZyB2ZWM0IHZDb2xvcjtcblxudmVjMiBwYXJhYm9sb2lkX2ZwNjQodmVjMiBzb3VyY2VbMl0sIHZlYzIgdGFyZ2V0WzJdLCBmbG9hdCByYXRpbykge1xuXG4gIHZlYzIgeFsyXTtcbiAgdmVjMl9taXhfZnA2NChzb3VyY2UsIHRhcmdldCwgcmF0aW8sIHgpO1xuICB2ZWMyIGNlbnRlclsyXTtcbiAgdmVjMl9taXhfZnA2NChzb3VyY2UsIHRhcmdldCwgMC41LCBjZW50ZXIpO1xuXG4gIHZlYzIgZFNvdXJjZUNlbnRlciA9IHZlYzJfZGlzdGFuY2VfZnA2NChzb3VyY2UsIGNlbnRlcik7XG4gIHZlYzIgZFhDZW50ZXIgPSB2ZWMyX2Rpc3RhbmNlX2ZwNjQoeCwgY2VudGVyKTtcbiAgcmV0dXJuIG11bF9mcDY0KHN1bV9mcDY0KGRTb3VyY2VDZW50ZXIsIGRYQ2VudGVyKSwgc3ViX2ZwNjQoZFNvdXJjZUNlbnRlciwgZFhDZW50ZXIpKTtcbn1cblxuZmxvYXQgZ2V0U2VnbWVudFJhdGlvKGZsb2F0IGluZGV4KSB7XG4gIHJldHVybiBzbW9vdGhzdGVwKDAuMCwgMS4wLCBpbmRleCAvIChudW1TZWdtZW50cyAtIDEuMCkpO1xufVxuXG52b2lkIGdldF9wb3NfZnA2NCh2ZWMyIHNvdXJjZVsyXSwgdmVjMiB0YXJnZXRbMl0sIGZsb2F0IHNlZ21lbnRSYXRpbywgb3V0IHZlYzIgcG9zaXRpb25bNF0pIHtcblxuICB2ZWMyIHZlcnRleF9oZWlnaHQgPSBwYXJhYm9sb2lkX2ZwNjQoc291cmNlLCB0YXJnZXQsIHNlZ21lbnRSYXRpbyk7XG5cbiAgdmVjMiBwb3NpdGlvbl90ZW1wWzJdO1xuXG4gIHZlYzJfbWl4X2ZwNjQoc291cmNlLCB0YXJnZXQsIHNlZ21lbnRSYXRpbywgcG9zaXRpb25fdGVtcCk7XG5cbiAgcG9zaXRpb25bMF0gPSBwb3NpdGlvbl90ZW1wWzBdO1xuICBwb3NpdGlvblsxXSA9IHBvc2l0aW9uX3RlbXBbMV07XG5cbiAgaWYgKHZlcnRleF9oZWlnaHQueCA8IDAuMCB8fCAodmVydGV4X2hlaWdodC54ID09IDAuMCAmJiB2ZXJ0ZXhfaGVpZ2h0LnkgPD0gMC4wKSkge1xuICAgIHZlcnRleF9oZWlnaHQgPSB2ZWMyKDAuMCwgMC4wKTtcbiAgfVxuXG4gIHBvc2l0aW9uWzJdID0gc3FydF9mcDY0KHZlcnRleF9oZWlnaHQpO1xuICBwb3NpdGlvblszXSA9IHZlYzIoMS4wLCAwLjApO1xufVxuXG52b2lkIG1haW4odm9pZCkge1xuICB2ZWM0IGluc3RhbmNlU291cmNlUG9zaXRpb25zNjQgPSB2ZWM0KGluc3RhbmNlUG9zaXRpb25zLngsXG4gICAgaW5zdGFuY2VQb3NpdGlvbnM2NExvdy54LCBpbnN0YW5jZVBvc2l0aW9ucy55LCBpbnN0YW5jZVBvc2l0aW9uczY0TG93LnkpO1xuICB2ZWM0IGluc3RhbmNlVGFyZ2V0UG9zaXRpb25zNjQgPSB2ZWM0KGluc3RhbmNlUG9zaXRpb25zLnosXG4gICAgaW5zdGFuY2VQb3NpdGlvbnM2NExvdy56LCBpbnN0YW5jZVBvc2l0aW9ucy53LCBpbnN0YW5jZVBvc2l0aW9uczY0TG93LncpO1xuXG4gIHZlYzIgcHJvamVjdGVkX3NvdXJjZV9jb29yZFsyXTtcbiAgdmVjMiBwcm9qZWN0ZWRfdGFyZ2V0X2Nvb3JkWzJdO1xuXG4gIHByb2plY3RfcG9zaXRpb25fZnA2NChpbnN0YW5jZVNvdXJjZVBvc2l0aW9uczY0LCBwcm9qZWN0ZWRfc291cmNlX2Nvb3JkKTtcbiAgcHJvamVjdF9wb3NpdGlvbl9mcDY0KGluc3RhbmNlVGFyZ2V0UG9zaXRpb25zNjQsIHByb2plY3RlZF90YXJnZXRfY29vcmQpO1xuXG4gIC8vIGlmIG5vdCBlbmFibGVkIGlzUG9pbnRJblJhbmdlIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXG4gIGZsb2F0IGlzU291cmNlSW5CcnVzaCA9IGlzUG9pbnRJblJhbmdlKGluc3RhbmNlUG9zaXRpb25zLnh5LCBicnVzaFNvdXJjZSk7XG4gIGZsb2F0IGlzVGFyZ2V0SW5CcnVzaCA9IGlzUG9pbnRJblJhbmdlKGluc3RhbmNlUG9zaXRpb25zLnp3LCBicnVzaFRhcmdldCk7XG5cbiAgZmxvYXQgaXNJbkJydXNoID0gZmxvYXQoZW5hYmxlQnJ1c2hpbmcgPD0gMC4gfHxcbiAgKGJydXNoU291cmNlICogaXNTb3VyY2VJbkJydXNoID4gMC4gfHwgYnJ1c2hUYXJnZXQgKiBpc1RhcmdldEluQnJ1c2ggPiAwLikpO1xuXG4gIGZsb2F0IHNlZ21lbnRJbmRleCA9IHBvc2l0aW9ucy54O1xuICBmbG9hdCBzZWdtZW50UmF0aW8gPSBnZXRTZWdtZW50UmF0aW8oc2VnbWVudEluZGV4KTtcblxuICAvLyBpZiBpdCdzIHRoZSBmaXJzdCBwb2ludCwgdXNlIG5leHQgLSBjdXJyZW50IGFzIGRpcmVjdGlvblxuICAvLyBvdGhlcndpc2UgdXNlIGN1cnJlbnQgLSBwcmV2XG4gIGZsb2F0IGluZGV4RGlyID0gbWl4KC0xLjAsIDEuMCwgc3RlcChzZWdtZW50SW5kZXgsIDAuMCkpO1xuICBmbG9hdCBuZXh0U2VnbWVudFJhdGlvID0gZ2V0U2VnbWVudFJhdGlvKHNlZ21lbnRJbmRleCArIGluZGV4RGlyKTtcblxuICB2ZWMyIGN1cnJfcG9zX21vZGVsc3BhY2VbNF07XG5cbiAgZ2V0X3Bvc19mcDY0KHByb2plY3RlZF9zb3VyY2VfY29vcmQsIHByb2plY3RlZF90YXJnZXRfY29vcmQsIHNlZ21lbnRSYXRpbyxcbiAgICBjdXJyX3Bvc19tb2RlbHNwYWNlKTtcblxuICB2ZWMyIG5leHRfcG9zX21vZGVsc3BhY2VbNF07XG5cbiAgZ2V0X3Bvc19mcDY0KHByb2plY3RlZF9zb3VyY2VfY29vcmQsIHByb2plY3RlZF90YXJnZXRfY29vcmQsIG5leHRTZWdtZW50UmF0aW8sXG4gICAgbmV4dF9wb3NfbW9kZWxzcGFjZSk7XG5cbiAgdmVjNCBjdXJyX3Bvc19jbGlwc3BhY2UgPSBwcm9qZWN0X3RvX2NsaXBzcGFjZV9mcDY0KGN1cnJfcG9zX21vZGVsc3BhY2UpO1xuICB2ZWM0IG5leHRfcG9zX2NsaXBzcGFjZSA9IHByb2plY3RfdG9fY2xpcHNwYWNlX2ZwNjQobmV4dF9wb3NfbW9kZWxzcGFjZSk7XG4gIC8vIG1peCBzdHJva2VXaWR0aCB3aXRoIGJydXNoLCBpZiBub3QgaW4gYnJ1c2gsIHJldHVybiAwXG4gIGZsb2F0IHN0cm9rZVdpZHRoID0gc3Ryb2tlU2NhbGUgKiBpbnN0YW5jZVN0cm9rZVdpZHRoO1xuICBmbG9hdCBmaW5hbFdpZHRoID0gbWl4KDAuMCwgc3Ryb2tlV2lkdGgsIGlzSW5CcnVzaCk7XG5cbiAgdmVjMiBvZmZzZXQgPSBnZXRFeHRydXNpb25PZmZzZXQobmV4dF9wb3NfY2xpcHNwYWNlLnh5IC0gY3Vycl9wb3NfY2xpcHNwYWNlLnh5LCBwb3NpdGlvbnMueSwgZmluYWxXaWR0aCk7XG5cbiAgZ2xfUG9zaXRpb24gPSBjdXJyX3Bvc19jbGlwc3BhY2UgKyB2ZWM0KG9mZnNldCwgMC4wLCAwLjApO1xuXG4gIGZsb2F0IHBpY2tlZCA9IGlzUGlja2VkKGluc3RhbmNlUGlja2luZ0NvbG9ycyk7XG5cbiAgdmVjNCBjb2xvciA9IG1peChpbnN0YW5jZVNvdXJjZUNvbG9ycywgaW5zdGFuY2VUYXJnZXRDb2xvcnMsIHNlZ21lbnRSYXRpbykgLyAyNTUuO1xuICB2ZWM0IGZpbmFsQ29sb3IgPSBtaXgoY29sb3IsIHBpY2tlZENvbG9yIC8gMjU1LiwgcGlja2VkKTtcblxuICB2Q29sb3IgPSBtaXgoXG4gICAgdmVjNChjb2xvci5yZ2IsIGNvbG9yLmEgKiBvcGFjaXR5KSxcbiAgICB2ZWM0KGluc3RhbmNlUGlja2luZ0NvbG9ycyAvIDI1NS4sIDEuKSxcbiAgICByZW5kZXJQaWNraW5nQnVmZmVyXG4gICk7XG59XG5gO1xuIl19