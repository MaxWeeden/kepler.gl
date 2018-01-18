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

exports.default = "#define SHADER_NAME line-layer-vertex-shader-64\n\nattribute vec3 positions;\nattribute vec3 instanceSourcePositions;\nattribute vec3 instanceTargetPositions;\nattribute vec4 instanceSourceTargetPositions64xyLow;\nattribute vec4 instanceColors;\nattribute vec4 instanceTargetColors;\nattribute vec3 instancePickingColors;\nattribute float instanceStrokeWidth;\n\nuniform float strokeScale;\nuniform float opacity;\nuniform float renderPickingBuffer;\nuniform vec4 pickedColor;\n\nuniform float enableBrushing;\nuniform float brushSource;\nuniform float brushTarget;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  // Position\n  vec4 instanceSourcePositions64 = vec4(\n    instanceSourcePositions.x, instanceSourceTargetPositions64xyLow.x,\n    instanceSourcePositions.y, instanceSourceTargetPositions64xyLow.y);\n\n  vec4 instanceTargetPositions64 = vec4(\n    instanceTargetPositions.x, instanceSourceTargetPositions64xyLow.z,\n    instanceTargetPositions.y, instanceSourceTargetPositions64xyLow.w);\n\n  vec2 projected_source_coord[2];\n  vec2 projected_target_coord[2];\n\n  project_position_fp64(instanceSourcePositions64, projected_source_coord);\n  project_position_fp64(instanceTargetPositions64, projected_target_coord);\n\n  vec2 source_pos_modelspace[4];\n  source_pos_modelspace[0] =  projected_source_coord[0];\n  source_pos_modelspace[1] =  projected_source_coord[1];\n  source_pos_modelspace[2] = vec2(project_scale(instanceSourcePositions.z), 0.0);\n  source_pos_modelspace[3] = vec2(1.0, 0.0);\n\n  vec4 source_pos_clipspace = project_to_clipspace_fp64(source_pos_modelspace);\n\n  vec2 target_pos_modelspace[4];\n  target_pos_modelspace[0] =  projected_target_coord[0];\n  target_pos_modelspace[1] =  projected_target_coord[1];\n  target_pos_modelspace[2] = vec2(project_scale(instanceTargetPositions.z), 0.0);\n  target_pos_modelspace[3] = vec2(1.0, 0.0);\n\n  vec4 target_pos_clipspace = project_to_clipspace_fp64(target_pos_modelspace);\n\n  // if not enabled isPointInRange will always return true\n  float isSourceInBrush = isPointInRange(instanceSourcePositions.xy, brushSource);\n  float isTargetInBrush = isPointInRange(instanceTargetPositions.xy, brushTarget);\n\n  float isInBrush = float(enableBrushing <= 0. ||\n  (brushSource * isSourceInBrush > 0. || brushTarget * isTargetInBrush > 0.));\n\n  float segmentIndex = positions.x;\n  vec4 p = mix(source_pos_clipspace, target_pos_clipspace, segmentIndex);\n\n  // mix strokeWidth with brush, if not in brush, return 0\n  float width = strokeScale * instanceStrokeWidth;\n  float finalWidth = mix(0.0, width, isInBrush);\n\n  vec2 offset = getExtrusionOffset(target_pos_clipspace.xy - source_pos_clipspace.xy, positions.y, finalWidth);\n\n  gl_Position = p + vec4(offset, 0.0, 0.0);\n\n  float picked = isPicked(instancePickingColors);\n\n  // Color\n  vec4 color = mix(instanceColors, instanceTargetColors, positions.x) / 255.;\n  vec4 finalColor = mix(color, pickedColor / 255., picked);\n  vec4 pickingColor = vec4(instancePickingColors / 255., 1.);\n\n  vColor = mix(\n    vec4(finalColor.rgb, finalColor.a * opacity),\n    pickingColor,\n    renderPickingBuffer\n  );\n}\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xpbmUtbGF5ZXIvbGluZS1icnVzaGluZy1sYXllci12ZXJ0ZXgtNjQuZ2xzbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxpbmUtYnJ1c2hpbmctbGF5ZXItdmVydGV4LTY0Lmdsc2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTUgLSAyMDE3IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuZXhwb3J0IGRlZmF1bHQgYFxcXG4jZGVmaW5lIFNIQURFUl9OQU1FIGxpbmUtbGF5ZXItdmVydGV4LXNoYWRlci02NFxuXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbnM7XG5hdHRyaWJ1dGUgdmVjMyBpbnN0YW5jZVNvdXJjZVBvc2l0aW9ucztcbmF0dHJpYnV0ZSB2ZWMzIGluc3RhbmNlVGFyZ2V0UG9zaXRpb25zO1xuYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VTb3VyY2VUYXJnZXRQb3NpdGlvbnM2NHh5TG93O1xuYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VDb2xvcnM7XG5hdHRyaWJ1dGUgdmVjNCBpbnN0YW5jZVRhcmdldENvbG9ycztcbmF0dHJpYnV0ZSB2ZWMzIGluc3RhbmNlUGlja2luZ0NvbG9ycztcbmF0dHJpYnV0ZSBmbG9hdCBpbnN0YW5jZVN0cm9rZVdpZHRoO1xuXG51bmlmb3JtIGZsb2F0IHN0cm9rZVNjYWxlO1xudW5pZm9ybSBmbG9hdCBvcGFjaXR5O1xudW5pZm9ybSBmbG9hdCByZW5kZXJQaWNraW5nQnVmZmVyO1xudW5pZm9ybSB2ZWM0IHBpY2tlZENvbG9yO1xuXG51bmlmb3JtIGZsb2F0IGVuYWJsZUJydXNoaW5nO1xudW5pZm9ybSBmbG9hdCBicnVzaFNvdXJjZTtcbnVuaWZvcm0gZmxvYXQgYnJ1c2hUYXJnZXQ7XG5cbnZhcnlpbmcgdmVjNCB2Q29sb3I7XG5cbnZvaWQgbWFpbih2b2lkKSB7XG4gIC8vIFBvc2l0aW9uXG4gIHZlYzQgaW5zdGFuY2VTb3VyY2VQb3NpdGlvbnM2NCA9IHZlYzQoXG4gICAgaW5zdGFuY2VTb3VyY2VQb3NpdGlvbnMueCwgaW5zdGFuY2VTb3VyY2VUYXJnZXRQb3NpdGlvbnM2NHh5TG93LngsXG4gICAgaW5zdGFuY2VTb3VyY2VQb3NpdGlvbnMueSwgaW5zdGFuY2VTb3VyY2VUYXJnZXRQb3NpdGlvbnM2NHh5TG93LnkpO1xuXG4gIHZlYzQgaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnM2NCA9IHZlYzQoXG4gICAgaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnMueCwgaW5zdGFuY2VTb3VyY2VUYXJnZXRQb3NpdGlvbnM2NHh5TG93LnosXG4gICAgaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnMueSwgaW5zdGFuY2VTb3VyY2VUYXJnZXRQb3NpdGlvbnM2NHh5TG93LncpO1xuXG4gIHZlYzIgcHJvamVjdGVkX3NvdXJjZV9jb29yZFsyXTtcbiAgdmVjMiBwcm9qZWN0ZWRfdGFyZ2V0X2Nvb3JkWzJdO1xuXG4gIHByb2plY3RfcG9zaXRpb25fZnA2NChpbnN0YW5jZVNvdXJjZVBvc2l0aW9uczY0LCBwcm9qZWN0ZWRfc291cmNlX2Nvb3JkKTtcbiAgcHJvamVjdF9wb3NpdGlvbl9mcDY0KGluc3RhbmNlVGFyZ2V0UG9zaXRpb25zNjQsIHByb2plY3RlZF90YXJnZXRfY29vcmQpO1xuXG4gIHZlYzIgc291cmNlX3Bvc19tb2RlbHNwYWNlWzRdO1xuICBzb3VyY2VfcG9zX21vZGVsc3BhY2VbMF0gPSAgcHJvamVjdGVkX3NvdXJjZV9jb29yZFswXTtcbiAgc291cmNlX3Bvc19tb2RlbHNwYWNlWzFdID0gIHByb2plY3RlZF9zb3VyY2VfY29vcmRbMV07XG4gIHNvdXJjZV9wb3NfbW9kZWxzcGFjZVsyXSA9IHZlYzIocHJvamVjdF9zY2FsZShpbnN0YW5jZVNvdXJjZVBvc2l0aW9ucy56KSwgMC4wKTtcbiAgc291cmNlX3Bvc19tb2RlbHNwYWNlWzNdID0gdmVjMigxLjAsIDAuMCk7XG5cbiAgdmVjNCBzb3VyY2VfcG9zX2NsaXBzcGFjZSA9IHByb2plY3RfdG9fY2xpcHNwYWNlX2ZwNjQoc291cmNlX3Bvc19tb2RlbHNwYWNlKTtcblxuICB2ZWMyIHRhcmdldF9wb3NfbW9kZWxzcGFjZVs0XTtcbiAgdGFyZ2V0X3Bvc19tb2RlbHNwYWNlWzBdID0gIHByb2plY3RlZF90YXJnZXRfY29vcmRbMF07XG4gIHRhcmdldF9wb3NfbW9kZWxzcGFjZVsxXSA9ICBwcm9qZWN0ZWRfdGFyZ2V0X2Nvb3JkWzFdO1xuICB0YXJnZXRfcG9zX21vZGVsc3BhY2VbMl0gPSB2ZWMyKHByb2plY3Rfc2NhbGUoaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnMueiksIDAuMCk7XG4gIHRhcmdldF9wb3NfbW9kZWxzcGFjZVszXSA9IHZlYzIoMS4wLCAwLjApO1xuXG4gIHZlYzQgdGFyZ2V0X3Bvc19jbGlwc3BhY2UgPSBwcm9qZWN0X3RvX2NsaXBzcGFjZV9mcDY0KHRhcmdldF9wb3NfbW9kZWxzcGFjZSk7XG5cbiAgLy8gaWYgbm90IGVuYWJsZWQgaXNQb2ludEluUmFuZ2Ugd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcbiAgZmxvYXQgaXNTb3VyY2VJbkJydXNoID0gaXNQb2ludEluUmFuZ2UoaW5zdGFuY2VTb3VyY2VQb3NpdGlvbnMueHksIGJydXNoU291cmNlKTtcbiAgZmxvYXQgaXNUYXJnZXRJbkJydXNoID0gaXNQb2ludEluUmFuZ2UoaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnMueHksIGJydXNoVGFyZ2V0KTtcblxuICBmbG9hdCBpc0luQnJ1c2ggPSBmbG9hdChlbmFibGVCcnVzaGluZyA8PSAwLiB8fFxuICAoYnJ1c2hTb3VyY2UgKiBpc1NvdXJjZUluQnJ1c2ggPiAwLiB8fCBicnVzaFRhcmdldCAqIGlzVGFyZ2V0SW5CcnVzaCA+IDAuKSk7XG5cbiAgZmxvYXQgc2VnbWVudEluZGV4ID0gcG9zaXRpb25zLng7XG4gIHZlYzQgcCA9IG1peChzb3VyY2VfcG9zX2NsaXBzcGFjZSwgdGFyZ2V0X3Bvc19jbGlwc3BhY2UsIHNlZ21lbnRJbmRleCk7XG5cbiAgLy8gbWl4IHN0cm9rZVdpZHRoIHdpdGggYnJ1c2gsIGlmIG5vdCBpbiBicnVzaCwgcmV0dXJuIDBcbiAgZmxvYXQgd2lkdGggPSBzdHJva2VTY2FsZSAqIGluc3RhbmNlU3Ryb2tlV2lkdGg7XG4gIGZsb2F0IGZpbmFsV2lkdGggPSBtaXgoMC4wLCB3aWR0aCwgaXNJbkJydXNoKTtcblxuICB2ZWMyIG9mZnNldCA9IGdldEV4dHJ1c2lvbk9mZnNldCh0YXJnZXRfcG9zX2NsaXBzcGFjZS54eSAtIHNvdXJjZV9wb3NfY2xpcHNwYWNlLnh5LCBwb3NpdGlvbnMueSwgZmluYWxXaWR0aCk7XG5cbiAgZ2xfUG9zaXRpb24gPSBwICsgdmVjNChvZmZzZXQsIDAuMCwgMC4wKTtcblxuICBmbG9hdCBwaWNrZWQgPSBpc1BpY2tlZChpbnN0YW5jZVBpY2tpbmdDb2xvcnMpO1xuXG4gIC8vIENvbG9yXG4gIHZlYzQgY29sb3IgPSBtaXgoaW5zdGFuY2VDb2xvcnMsIGluc3RhbmNlVGFyZ2V0Q29sb3JzLCBwb3NpdGlvbnMueCkgLyAyNTUuO1xuICB2ZWM0IGZpbmFsQ29sb3IgPSBtaXgoY29sb3IsIHBpY2tlZENvbG9yIC8gMjU1LiwgcGlja2VkKTtcbiAgdmVjNCBwaWNraW5nQ29sb3IgPSB2ZWM0KGluc3RhbmNlUGlja2luZ0NvbG9ycyAvIDI1NS4sIDEuKTtcblxuICB2Q29sb3IgPSBtaXgoXG4gICAgdmVjNChmaW5hbENvbG9yLnJnYiwgZmluYWxDb2xvci5hICogb3BhY2l0eSksXG4gICAgcGlja2luZ0NvbG9yLFxuICAgIHJlbmRlclBpY2tpbmdCdWZmZXJcbiAgKTtcbn1cbmA7XG4iXX0=