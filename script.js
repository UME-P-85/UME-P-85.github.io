/* =========================================================================
   UMEP — Dreamfield interactions
   - Generate floating photo bubbles from local /images/*.jpg
   - Click/hover to reveal detail card
   - Smooth scroll + FormSubmit guard preserved
   ========================================================================= */

(() => {
  /* -------------------------------------------------------------------------
     1. Show metadata — every photo shares this common title/subtitle/credit.
        (Set from the source folder name: "20260125如月千早武道館単独公演「OathONE」")
     ------------------------------------------------------------------------- */
  const SHOW = {
    title:    '20260125如月千早武道館単独公演「OathONE」',
    subtitle: 'Live Photography · Solo Concert',
    tag:      'Live',
    desc:     'Kisaragi Chihaya solo concert at Nippon Budokan, January 25, 2026.',
    descJa:   '如月千早 日本武道館単独公演「OathONE」 — 2026年1月25日。',
    credit:   '© UMEP',
  };

  /* -------------------------------------------------------------------------
     2. Photo files — 508 entries generated from the mounted folder.
        Each becomes one floating bubble backed by images/{id}_sq.jpg.
     ------------------------------------------------------------------------- */
  const PHOTO_FILES = [
    { id: 'UME_4118', idx: '001 / 508' },
    { id: 'UME_4122', idx: '002 / 508' },
    { id: 'UME_4123', idx: '003 / 508' },
    { id: 'UME_4128', idx: '004 / 508' },
    { id: 'UME_4131', idx: '005 / 508' },
    { id: 'UME_4132', idx: '006 / 508' },
    { id: 'UME_4133', idx: '007 / 508' },
    { id: 'UME_4138', idx: '008 / 508' },
    { id: 'UME_4141', idx: '009 / 508' },
    { id: 'UME_4143', idx: '010 / 508' },
    { id: 'UME_4147', idx: '011 / 508' },
    { id: 'UME_4151', idx: '012 / 508' },
    { id: 'UME_4155', idx: '013 / 508' },
    { id: 'UME_4158', idx: '014 / 508' },
    { id: 'UME_4163', idx: '015 / 508' },
    { id: 'UME_4165', idx: '016 / 508' },
    { id: 'UME_4168', idx: '017 / 508' },
    { id: 'UME_4177', idx: '018 / 508' },
    { id: 'UME_4180', idx: '019 / 508' },
    { id: 'UME_4188', idx: '020 / 508' },
    { id: 'UME_4191', idx: '021 / 508' },
    { id: 'UME_4193', idx: '022 / 508' },
    { id: 'UME_4197', idx: '023 / 508' },
    { id: 'UME_4202', idx: '024 / 508' },
    { id: 'UME_4204', idx: '025 / 508' },
    { id: 'UME_4208', idx: '026 / 508' },
    { id: 'UME_4211', idx: '027 / 508' },
    { id: 'UME_4214', idx: '028 / 508' },
    { id: 'UME_4216', idx: '029 / 508' },
    { id: 'UME_4218', idx: '030 / 508' },
    { id: 'UME_4221', idx: '031 / 508' },
    { id: 'UME_4222', idx: '032 / 508' },
    { id: 'UME_4223', idx: '033 / 508' },
    { id: 'UME_4227', idx: '034 / 508' },
    { id: 'UME_4228', idx: '035 / 508' },
    { id: 'UME_4233', idx: '036 / 508' },
    { id: 'UME_4235', idx: '037 / 508' },
    { id: 'UME_4236', idx: '038 / 508' },
    { id: 'UME_4237', idx: '039 / 508' },
    { id: 'UME_4239', idx: '040 / 508' },
    { id: 'UME_4241', idx: '041 / 508' },
    { id: 'UME_4247', idx: '042 / 508' },
    { id: 'UME_4252', idx: '043 / 508' },
    { id: 'UME_4255', idx: '044 / 508' },
    { id: 'UME_4262', idx: '045 / 508' },
    { id: 'UME_4263', idx: '046 / 508' },
    { id: 'UME_4273', idx: '047 / 508' },
    { id: 'UME_4274', idx: '048 / 508' },
    { id: 'UME_4275', idx: '049 / 508' },
    { id: 'UME_4276', idx: '050 / 508' },
    { id: 'UME_4279', idx: '051 / 508' },
    { id: 'UME_4285', idx: '052 / 508' },
    { id: 'UME_4290', idx: '053 / 508' },
    { id: 'UME_4295', idx: '054 / 508' },
    { id: 'UME_4299', idx: '055 / 508' },
    { id: 'UME_4301', idx: '056 / 508' },
    { id: 'UME_4302', idx: '057 / 508' },
    { id: 'UME_4303', idx: '058 / 508' },
    { id: 'UME_4315', idx: '059 / 508' },
    { id: 'UME_4316', idx: '060 / 508' },
    { id: 'UME_4317', idx: '061 / 508' },
    { id: 'UME_4318', idx: '062 / 508' },
    { id: 'UME_4320', idx: '063 / 508' },
    { id: 'UME_4322', idx: '064 / 508' },
    { id: 'UME_4332', idx: '065 / 508' },
    { id: 'UME_4333', idx: '066 / 508' },
    { id: 'UME_4342', idx: '067 / 508' },
    { id: 'UME_4343', idx: '068 / 508' },
    { id: 'UME_4344', idx: '069 / 508' },
    { id: 'UME_4345', idx: '070 / 508' },
    { id: 'UME_4346', idx: '071 / 508' },
    { id: 'UME_4351', idx: '072 / 508' },
    { id: 'UME_4352', idx: '073 / 508' },
    { id: 'UME_4353', idx: '074 / 508' },
    { id: 'UME_4354', idx: '075 / 508' },
    { id: 'UME_4355', idx: '076 / 508' },
    { id: 'UME_4356', idx: '077 / 508' },
    { id: 'UME_4357', idx: '078 / 508' },
    { id: 'UME_4359', idx: '079 / 508' },
    { id: 'UME_4363', idx: '080 / 508' },
    { id: 'UME_4366', idx: '081 / 508' },
    { id: 'UME_4367', idx: '082 / 508' },
    { id: 'UME_4369', idx: '083 / 508' },
    { id: 'UME_4370', idx: '084 / 508' },
    { id: 'UME_4372', idx: '085 / 508' },
    { id: 'UME_4373', idx: '086 / 508' },
    { id: 'UME_4374', idx: '087 / 508' },
    { id: 'UME_4385', idx: '088 / 508' },
    { id: 'UME_4389', idx: '089 / 508' },
    { id: 'UME_4396', idx: '090 / 508' },
    { id: 'UME_4398', idx: '091 / 508' },
    { id: 'UME_4399', idx: '092 / 508' },
    { id: 'UME_4407', idx: '093 / 508' },
    { id: 'UME_4411', idx: '094 / 508' },
    { id: 'UME_4413', idx: '095 / 508' },
    { id: 'UME_4414', idx: '096 / 508' },
    { id: 'UME_4417', idx: '097 / 508' },
    { id: 'UME_4423', idx: '098 / 508' },
    { id: 'UME_4425', idx: '099 / 508' },
    { id: 'UME_4426', idx: '100 / 508' },
    { id: 'UME_4427', idx: '101 / 508' },
    { id: 'UME_4430', idx: '102 / 508' },
    { id: 'UME_4431', idx: '103 / 508' },
    { id: 'UME_4438', idx: '104 / 508' },
    { id: 'UME_4439', idx: '105 / 508' },
    { id: 'UME_4440', idx: '106 / 508' },
    { id: 'UME_4441', idx: '107 / 508' },
    { id: 'UME_4442', idx: '108 / 508' },
    { id: 'UME_4443', idx: '109 / 508' },
    { id: 'UME_4445', idx: '110 / 508' },
    { id: 'UME_4448', idx: '111 / 508' },
    { id: 'UME_4450', idx: '112 / 508' },
    { id: 'UME_4452', idx: '113 / 508' },
    { id: 'UME_4458', idx: '114 / 508' },
    { id: 'UME_4459', idx: '115 / 508' },
    { id: 'UME_4460', idx: '116 / 508' },
    { id: 'UME_4463', idx: '117 / 508' },
    { id: 'UME_4464', idx: '118 / 508' },
    { id: 'UME_4470', idx: '119 / 508' },
    { id: 'UME_4473', idx: '120 / 508' },
    { id: 'UME_4475', idx: '121 / 508' },
    { id: 'UME_4476', idx: '122 / 508' },
    { id: 'UME_4477', idx: '123 / 508' },
    { id: 'UME_4478', idx: '124 / 508' },
    { id: 'UME_4479', idx: '125 / 508' },
    { id: 'UME_4480', idx: '126 / 508' },
    { id: 'UME_4487', idx: '127 / 508' },
    { id: 'UME_4497', idx: '128 / 508' },
    { id: 'UME_4504', idx: '129 / 508' },
    { id: 'UME_4508', idx: '130 / 508' },
    { id: 'UME_4510', idx: '131 / 508' },
    { id: 'UME_4515', idx: '132 / 508' },
    { id: 'UME_4518', idx: '133 / 508' },
    { id: 'UME_4524', idx: '134 / 508' },
    { id: 'UME_4526', idx: '135 / 508' },
    { id: 'UME_4528', idx: '136 / 508' },
    { id: 'UME_4530', idx: '137 / 508' },
    { id: 'UME_4531', idx: '138 / 508' },
    { id: 'UME_4534', idx: '139 / 508' },
    { id: 'UME_4536', idx: '140 / 508' },
    { id: 'UME_4540', idx: '141 / 508' },
    { id: 'UME_4543', idx: '142 / 508' },
    { id: 'UME_4546', idx: '143 / 508' },
    { id: 'UME_4550', idx: '144 / 508' },
    { id: 'UME_4553', idx: '145 / 508' },
    { id: 'UME_4562', idx: '146 / 508' },
    { id: 'UME_4568', idx: '147 / 508' },
    { id: 'UME_4570', idx: '148 / 508' },
    { id: 'UME_4572', idx: '149 / 508' },
    { id: 'UME_4583', idx: '150 / 508' },
    { id: 'UME_4584', idx: '151 / 508' },
    { id: 'UME_4590', idx: '152 / 508' },
    { id: 'UME_4592', idx: '153 / 508' },
    { id: 'UME_4597', idx: '154 / 508' },
    { id: 'UME_4603', idx: '155 / 508' },
    { id: 'UME_4617', idx: '156 / 508' },
    { id: 'UME_4626', idx: '157 / 508' },
    { id: 'UME_4634', idx: '158 / 508' },
    { id: 'UME_4638', idx: '159 / 508' },
    { id: 'UME_4643', idx: '160 / 508' },
    { id: 'UME_4650', idx: '161 / 508' },
    { id: 'UME_4653', idx: '162 / 508' },
    { id: 'UME_4656', idx: '163 / 508' },
    { id: 'UME_4662', idx: '164 / 508' },
    { id: 'UME_4666', idx: '165 / 508' },
    { id: 'UME_4668', idx: '166 / 508' },
    { id: 'UME_4669', idx: '167 / 508' },
    { id: 'UME_4673', idx: '168 / 508' },
    { id: 'UME_4681', idx: '169 / 508' },
    { id: 'UME_4685', idx: '170 / 508' },
    { id: 'UME_4691', idx: '171 / 508' },
    { id: 'UME_4695', idx: '172 / 508' },
    { id: 'UME_4701', idx: '173 / 508' },
    { id: 'UME_4711', idx: '174 / 508' },
    { id: 'UME_4713', idx: '175 / 508' },
    { id: 'UME_4720', idx: '176 / 508' },
    { id: 'UME_4723', idx: '177 / 508' },
    { id: 'UME_4727', idx: '178 / 508' },
    { id: 'UME_4728', idx: '179 / 508' },
    { id: 'UME_4735', idx: '180 / 508' },
    { id: 'UME_4736', idx: '181 / 508' },
    { id: 'UME_4739', idx: '182 / 508' },
    { id: 'UME_4740', idx: '183 / 508' },
    { id: 'UME_4754', idx: '184 / 508' },
    { id: 'UME_4771', idx: '185 / 508' },
    { id: 'UME_4779', idx: '186 / 508' },
    { id: 'UME_4785', idx: '187 / 508' },
    { id: 'UME_4787', idx: '188 / 508' },
    { id: 'UME_4788', idx: '189 / 508' },
    { id: 'UME_4789', idx: '190 / 508' },
    { id: 'UME_4790', idx: '191 / 508' },
    { id: 'UME_4795', idx: '192 / 508' },
    { id: 'UME_4806', idx: '193 / 508' },
    { id: 'UME_4811', idx: '194 / 508' },
    { id: 'UME_4814', idx: '195 / 508' },
    { id: 'UME_4820', idx: '196 / 508' },
    { id: 'UME_4824', idx: '197 / 508' },
    { id: 'UME_4831', idx: '198 / 508' },
    { id: 'UME_4835', idx: '199 / 508' },
    { id: 'UME_4838', idx: '200 / 508' },
    { id: 'UME_4841', idx: '201 / 508' },
    { id: 'UME_4846', idx: '202 / 508' },
    { id: 'UME_4848', idx: '203 / 508' },
    { id: 'UME_4850', idx: '204 / 508' },
    { id: 'UME_4856', idx: '205 / 508' },
    { id: 'UME_4861', idx: '206 / 508' },
    { id: 'UME_4863', idx: '207 / 508' },
    { id: 'UME_4868', idx: '208 / 508' },
    { id: 'UME_4869', idx: '209 / 508' },
    { id: 'UME_4871', idx: '210 / 508' },
    { id: 'UME_4882', idx: '211 / 508' },
    { id: 'UME_4886', idx: '212 / 508' },
    { id: 'UME_4896', idx: '213 / 508' },
    { id: 'UME_4900', idx: '214 / 508' },
    { id: 'UME_4903', idx: '215 / 508' },
    { id: 'UME_4907', idx: '216 / 508' },
    { id: 'UME_4916', idx: '217 / 508' },
    { id: 'UME_4920', idx: '218 / 508' },
    { id: 'UME_4928', idx: '219 / 508' },
    { id: 'UME_4929', idx: '220 / 508' },
    { id: 'UME_4941', idx: '221 / 508' },
    { id: 'UME_4942', idx: '222 / 508' },
    { id: 'UME_4943', idx: '223 / 508' },
    { id: 'UME_4944', idx: '224 / 508' },
    { id: 'UME_4947', idx: '225 / 508' },
    { id: 'UME_4951', idx: '226 / 508' },
    { id: 'UME_4955', idx: '227 / 508' },
    { id: 'UME_4957', idx: '228 / 508' },
    { id: 'UME_4959', idx: '229 / 508' },
    { id: 'UME_4963', idx: '230 / 508' },
    { id: 'UME_4965', idx: '231 / 508' },
    { id: 'UME_4976', idx: '232 / 508' },
    { id: 'UME_4977', idx: '233 / 508' },
    { id: 'UME_4984', idx: '234 / 508' },
    { id: 'UME_4990', idx: '235 / 508' },
    { id: 'UME_4991', idx: '236 / 508' },
    { id: 'UME_4992', idx: '237 / 508' },
    { id: 'UME_4993', idx: '238 / 508' },
    { id: 'UME_4994', idx: '239 / 508' },
    { id: 'UME_4995', idx: '240 / 508' },
    { id: 'UME_4996', idx: '241 / 508' },
    { id: 'UME_4997', idx: '242 / 508' },
    { id: 'UME_5001', idx: '243 / 508' },
    { id: 'UME_5002', idx: '244 / 508' },
    { id: 'UME_5008', idx: '245 / 508' },
    { id: 'UME_5009', idx: '246 / 508' },
    { id: 'UME_5013', idx: '247 / 508' },
    { id: 'UME_5018', idx: '248 / 508' },
    { id: 'UME_5023', idx: '249 / 508' },
    { id: 'UME_5028', idx: '250 / 508' },
    { id: 'UME_5029', idx: '251 / 508' },
    { id: 'UME_5042', idx: '252 / 508' },
    { id: 'UME_5049', idx: '253 / 508' },
    { id: 'UME_5056', idx: '254 / 508' },
    { id: 'UME_5058', idx: '255 / 508' },
    { id: 'UME_5059', idx: '256 / 508' },
    { id: 'UME_5060', idx: '257 / 508' },
    { id: 'UME_5061', idx: '258 / 508' },
    { id: 'UME_5062', idx: '259 / 508' },
    { id: 'UME_5066', idx: '260 / 508' },
    { id: 'UME_5069', idx: '261 / 508' },
    { id: 'UME_5075', idx: '262 / 508' },
    { id: 'UME_5077', idx: '263 / 508' },
    { id: 'UME_5087', idx: '264 / 508' },
    { id: 'UME_5090', idx: '265 / 508' },
    { id: 'UME_5098', idx: '266 / 508' },
    { id: 'UME_5099', idx: '267 / 508' },
    { id: 'UME_5103', idx: '268 / 508' },
    { id: 'UME_5105', idx: '269 / 508' },
    { id: 'UME_5107', idx: '270 / 508' },
    { id: 'UME_5108', idx: '271 / 508' },
    { id: 'UME_5110', idx: '272 / 508' },
    { id: 'UME_5112', idx: '273 / 508' },
    { id: 'UME_5113', idx: '274 / 508' },
    { id: 'UME_5118', idx: '275 / 508' },
    { id: 'UME_5121', idx: '276 / 508' },
    { id: 'UME_5131', idx: '277 / 508' },
    { id: 'UME_5132', idx: '278 / 508' },
    { id: 'UME_5133', idx: '279 / 508' },
    { id: 'UME_5138', idx: '280 / 508' },
    { id: 'UME_5144', idx: '281 / 508' },
    { id: 'UME_5146', idx: '282 / 508' },
    { id: 'UME_5147', idx: '283 / 508' },
    { id: 'UME_5148', idx: '284 / 508' },
    { id: 'UME_5150', idx: '285 / 508' },
    { id: 'UME_5157', idx: '286 / 508' },
    { id: 'UME_5158', idx: '287 / 508' },
    { id: 'UME_5163', idx: '288 / 508' },
    { id: 'UME_5164', idx: '289 / 508' },
    { id: 'UME_5168', idx: '290 / 508' },
    { id: 'UME_5169', idx: '291 / 508' },
    { id: 'UME_5171', idx: '292 / 508' },
    { id: 'UME_5172', idx: '293 / 508' },
    { id: 'UME_5176', idx: '294 / 508' },
    { id: 'UME_5178', idx: '295 / 508' },
    { id: 'UME_5180', idx: '296 / 508' },
    { id: 'UME_5182', idx: '297 / 508' },
    { id: 'UME_5183', idx: '298 / 508' },
    { id: 'UME_5186', idx: '299 / 508' },
    { id: 'UME_5194', idx: '300 / 508' },
    { id: 'UME_5196', idx: '301 / 508' },
    { id: 'UME_5197', idx: '302 / 508' },
    { id: 'UME_5202', idx: '303 / 508' },
    { id: 'UME_5210', idx: '304 / 508' },
    { id: 'UME_5213', idx: '305 / 508' },
    { id: 'UME_5214', idx: '306 / 508' },
    { id: 'UME_5215', idx: '307 / 508' },
    { id: 'UME_5216', idx: '308 / 508' },
    { id: 'UME_5218', idx: '309 / 508' },
    { id: 'UME_5224', idx: '310 / 508' },
    { id: 'UME_5227', idx: '311 / 508' },
    { id: 'UME_5228', idx: '312 / 508' },
    { id: 'UME_5229', idx: '313 / 508' },
    { id: 'UME_5230', idx: '314 / 508' },
    { id: 'UME_5231', idx: '315 / 508' },
    { id: 'UME_5234', idx: '316 / 508' },
    { id: 'UME_5236', idx: '317 / 508' },
    { id: 'UME_5243', idx: '318 / 508' },
    { id: 'UME_5251', idx: '319 / 508' },
    { id: 'UME_5255', idx: '320 / 508' },
    { id: 'UME_5256', idx: '321 / 508' },
    { id: 'UME_5257', idx: '322 / 508' },
    { id: 'UME_5259', idx: '323 / 508' },
    { id: 'UME_5261', idx: '324 / 508' },
    { id: 'UME_5267', idx: '325 / 508' },
    { id: 'UME_5278', idx: '326 / 508' },
    { id: 'UME_5280', idx: '327 / 508' },
    { id: 'UME_5286', idx: '328 / 508' },
    { id: 'UME_5292', idx: '329 / 508' },
    { id: 'UME_5293', idx: '330 / 508' },
    { id: 'UME_5294', idx: '331 / 508' },
    { id: 'UME_5297', idx: '332 / 508' },
    { id: 'UME_5300', idx: '333 / 508' },
    { id: 'UME_5301', idx: '334 / 508' },
    { id: 'UME_5304', idx: '335 / 508' },
    { id: 'UME_5305', idx: '336 / 508' },
    { id: 'UME_5309', idx: '337 / 508' },
    { id: 'UME_5310', idx: '338 / 508' },
    { id: 'UME_5312', idx: '339 / 508' },
    { id: 'UME_5313', idx: '340 / 508' },
    { id: 'UME_5314', idx: '341 / 508' },
    { id: 'UME_5315', idx: '342 / 508' },
    { id: 'UME_5317', idx: '343 / 508' },
    { id: 'UME_5320', idx: '344 / 508' },
    { id: 'UME_5321', idx: '345 / 508' },
    { id: 'UME_5322', idx: '346 / 508' },
    { id: 'UME_5323', idx: '347 / 508' },
    { id: 'UME_5324', idx: '348 / 508' },
    { id: 'UME_5325', idx: '349 / 508' },
    { id: 'UME_5326', idx: '350 / 508' },
    { id: 'UME_5327', idx: '351 / 508' },
    { id: 'UME_5328', idx: '352 / 508' },
    { id: 'UME_5332', idx: '353 / 508' },
    { id: 'UME_5345', idx: '354 / 508' },
    { id: 'UME_5347', idx: '355 / 508' },
    { id: 'UME_5348', idx: '356 / 508' },
    { id: 'UME_5349', idx: '357 / 508' },
    { id: 'UME_5351', idx: '358 / 508' },
    { id: 'UME_5352', idx: '359 / 508' },
    { id: 'UME_5353', idx: '360 / 508' },
    { id: 'UME_5358', idx: '361 / 508' },
    { id: 'UME_5363', idx: '362 / 508' },
    { id: 'UME_5366', idx: '363 / 508' },
    { id: 'UME_5367', idx: '364 / 508' },
    { id: 'UME_5368', idx: '365 / 508' },
    { id: 'UME_5369', idx: '366 / 508' },
    { id: 'UME_5370', idx: '367 / 508' },
    { id: 'UME_5375', idx: '368 / 508' },
    { id: 'UME_5376', idx: '369 / 508' },
    { id: 'UME_5393', idx: '370 / 508' },
    { id: 'UME_5402', idx: '371 / 508' },
    { id: 'UME_5410', idx: '372 / 508' },
    { id: 'UME_5434', idx: '373 / 508' },
    { id: 'UME_5435', idx: '374 / 508' },
    { id: 'UME_5438', idx: '375 / 508' },
    { id: 'UME_5442', idx: '376 / 508' },
    { id: 'UME_5444', idx: '377 / 508' },
    { id: 'UME_5446', idx: '378 / 508' },
    { id: 'UME_5454', idx: '379 / 508' },
    { id: 'UME_5461', idx: '380 / 508' },
    { id: 'UME_5463', idx: '381 / 508' },
    { id: 'UME_5465', idx: '382 / 508' },
    { id: 'UME_5472', idx: '383 / 508' },
    { id: 'UME_5476', idx: '384 / 508' },
    { id: 'UME_5479', idx: '385 / 508' },
    { id: 'UME_5480', idx: '386 / 508' },
    { id: 'UME_5488', idx: '387 / 508' },
    { id: 'UME_5490', idx: '388 / 508' },
    { id: 'UME_5491', idx: '389 / 508' },
    { id: 'UME_5494', idx: '390 / 508' },
    { id: 'UME_5497', idx: '391 / 508' },
    { id: 'UME_5500', idx: '392 / 508' },
    { id: 'UME_5511', idx: '393 / 508' },
    { id: 'UME_5513', idx: '394 / 508' },
    { id: 'UME_5514', idx: '395 / 508' },
    { id: 'UME_5521', idx: '396 / 508' },
    { id: 'UME_5522', idx: '397 / 508' },
    { id: 'UME_5523', idx: '398 / 508' },
    { id: 'UME_5527', idx: '399 / 508' },
    { id: 'UME_5529', idx: '400 / 508' },
    { id: 'UME_5533', idx: '401 / 508' },
    { id: 'UME_5536', idx: '402 / 508' },
    { id: 'UME_5537', idx: '403 / 508' },
    { id: 'UME_5538', idx: '404 / 508' },
    { id: 'UME_5540', idx: '405 / 508' },
    { id: 'UME_5541', idx: '406 / 508' },
    { id: 'UME_5545', idx: '407 / 508' },
    { id: 'UME_5546', idx: '408 / 508' },
    { id: 'UME_5549', idx: '409 / 508' },
    { id: 'UME_5550', idx: '410 / 508' },
    { id: 'UME_5559', idx: '411 / 508' },
    { id: 'UME_5561', idx: '412 / 508' },
    { id: 'UME_5573', idx: '413 / 508' },
    { id: 'UME_5574', idx: '414 / 508' },
    { id: 'UME_5577', idx: '415 / 508' },
    { id: 'UME_5579', idx: '416 / 508' },
    { id: 'UME_5581', idx: '417 / 508' },
    { id: 'UME_5585', idx: '418 / 508' },
    { id: 'UME_5586', idx: '419 / 508' },
    { id: 'UME_5592', idx: '420 / 508' },
    { id: 'UME_5604', idx: '421 / 508' },
    { id: 'UME_5606', idx: '422 / 508' },
    { id: 'UME_5618', idx: '423 / 508' },
    { id: 'UME_5622', idx: '424 / 508' },
    { id: 'UME_5626', idx: '425 / 508' },
    { id: 'UME_5629', idx: '426 / 508' },
    { id: 'UME_5636', idx: '427 / 508' },
    { id: 'UME_5645', idx: '428 / 508' },
    { id: 'UME_5657', idx: '429 / 508' },
    { id: 'UME_5659', idx: '430 / 508' },
    { id: 'UME_5661', idx: '431 / 508' },
    { id: 'UME_5662', idx: '432 / 508' },
    { id: 'UME_5663', idx: '433 / 508' },
    { id: 'UME_5666', idx: '434 / 508' },
    { id: 'UME_5668', idx: '435 / 508' },
    { id: 'UME_5673', idx: '436 / 508' },
    { id: 'UME_5678', idx: '437 / 508' },
    { id: 'UME_5680', idx: '438 / 508' },
    { id: 'UME_5686', idx: '439 / 508' },
    { id: 'UME_5691', idx: '440 / 508' },
    { id: 'UME_5695', idx: '441 / 508' },
    { id: 'UME_5698', idx: '442 / 508' },
    { id: 'UME_5711', idx: '443 / 508' },
    { id: 'UME_5715', idx: '444 / 508' },
    { id: 'UME_5716', idx: '445 / 508' },
    { id: 'UME_5719', idx: '446 / 508' },
    { id: 'UME_5722', idx: '447 / 508' },
    { id: 'UME_5727', idx: '448 / 508' },
    { id: 'UME_5729', idx: '449 / 508' },
    { id: 'UME_5731', idx: '450 / 508' },
    { id: 'UME_5733', idx: '451 / 508' },
    { id: 'UME_5739', idx: '452 / 508' },
    { id: 'UME_5744', idx: '453 / 508' },
    { id: 'UME_5748', idx: '454 / 508' },
    { id: 'UME_5749', idx: '455 / 508' },
    { id: 'UME_5756', idx: '456 / 508' },
    { id: 'UME_5757', idx: '457 / 508' },
    { id: 'UME_5759', idx: '458 / 508' },
    { id: 'UME_5763', idx: '459 / 508' },
    { id: 'UME_5767', idx: '460 / 508' },
    { id: 'UME_5769', idx: '461 / 508' },
    { id: 'UME_5771', idx: '462 / 508' },
    { id: 'UME_5772', idx: '463 / 508' },
    { id: 'UME_5783', idx: '464 / 508' },
    { id: 'UME_5787', idx: '465 / 508' },
    { id: 'UME_5799', idx: '466 / 508' },
    { id: 'UME_5802', idx: '467 / 508' },
    { id: 'UME_5803', idx: '468 / 508' },
    { id: 'UME_5810', idx: '469 / 508' },
    { id: 'UME_5819', idx: '470 / 508' },
    { id: 'UME_5822', idx: '471 / 508' },
    { id: 'UME_5825', idx: '472 / 508' },
    { id: 'UME_5827', idx: '473 / 508' },
    { id: 'UME_5830', idx: '474 / 508' },
    { id: 'UME_5831', idx: '475 / 508' },
    { id: 'UME_5838', idx: '476 / 508' },
    { id: 'UME_5842', idx: '477 / 508' },
    { id: 'UME_5847', idx: '478 / 508' },
    { id: 'UME_5852', idx: '479 / 508' },
    { id: 'UME_5861', idx: '480 / 508' },
    { id: 'UME_5876', idx: '481 / 508' },
    { id: 'UME_5880', idx: '482 / 508' },
    { id: 'UME_5904', idx: '483 / 508' },
    { id: 'UME_5906', idx: '484 / 508' },
    { id: 'UME_5913', idx: '485 / 508' },
    { id: 'UME_5914', idx: '486 / 508' },
    { id: 'UME_5915', idx: '487 / 508' },
    { id: 'UME_5916', idx: '488 / 508' },
    { id: 'UME_5917', idx: '489 / 508' },
    { id: 'UME_5918', idx: '490 / 508' },
    { id: 'UME_5919', idx: '491 / 508' },
    { id: 'UME_5920', idx: '492 / 508' },
    { id: 'UME_5921', idx: '493 / 508' },
    { id: 'UME_5922', idx: '494 / 508' },
    { id: 'UME_5929', idx: '495 / 508' },
    { id: 'UME_5940', idx: '496 / 508' },
    { id: 'UME_5947', idx: '497 / 508' },
    { id: 'UME_5951', idx: '498 / 508' },
    { id: 'UME_5953', idx: '499 / 508' },
    { id: 'UME_5957', idx: '500 / 508' },
    { id: 'UME_5958', idx: '501 / 508' },
    { id: 'UME_5960', idx: '502 / 508' },
    { id: 'UME_5965', idx: '503 / 508' },
    { id: 'UME_5968', idx: '504 / 508' },
    { id: 'UME_5974', idx: '505 / 508' },
    { id: 'UME_5977', idx: '506 / 508' },
    { id: 'UME_5980', idx: '507 / 508' },
    { id: 'UME_5982', idx: '508 / 508' }
  ];

  // Build PHOTOS by folding the common SHOW metadata into each file entry.
  const PHOTOS = PHOTO_FILES.map(f => ({
    ...SHOW,
    id:   f.id,
    meta: f.idx,   // e.g. "042 / 508" — shown as the "No." line in the card
  }));

  /* -------------------------------------------------------------------------
     3. Fisher-Yates shuffle so a different random subset shows each load.
     ------------------------------------------------------------------------- */
  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* -------------------------------------------------------------------------
     4. Placement helpers — avoid heavy overlap between bubbles
     ------------------------------------------------------------------------- */
  function rand(min, max) { return Math.random() * (max - min) + min; }

  function pickTier() {
    // Distribution: ~15% large, ~30% medium, ~55% small
    const r = Math.random();
    if (r < 0.15) return 'lg';
    if (r < 0.45) return 'md';
    return 'sm';
  }

  const TIER_TO_APPROX_PX = { sm: 90, md: 150, lg: 260 };

  function tryPlace(placed, tier, container, attempts = 40) {
    const approx = TIER_TO_APPROX_PX[tier];
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const margin = approx * 0.35;

    for (let i = 0; i < attempts; i++) {
      const x = rand(margin, cw - approx - margin);
      const y = rand(margin, ch - approx - margin);

      let ok = true;
      for (const p of placed) {
        const minDist = (p.size + approx) * 0.55; // allow slight overlap
        const dx = p.x - x;
        const dy = p.y - y;
        if (Math.hypot(dx, dy) < minDist) { ok = false; break; }
      }
      if (ok) return { x, y, size: approx };
    }
    return null; // give up
  }

  /* -------------------------------------------------------------------------
     5. Build the floating field
        - We shuffle PHOTOS on every build so a different subset floats each time.
        - We keep a runtime map (dataset.index → photo) so the detail card can
          look up the right entry after the shuffle.
     ------------------------------------------------------------------------- */
  let CURRENT_PHOTOS = [];

  function buildField() {
    const field = document.getElementById('floating-field');
    if (!field) return;

    // Wait for layout so clientWidth/Height are real
    if (field.clientWidth === 0) {
      requestAnimationFrame(buildField);
      return;
    }

    // Clear any previously generated content (if re-invoked)
    field.innerHTML = '';

    // Shuffle for this render.
    CURRENT_PHOTOS = shuffled(PHOTOS);

    const placed = [];

    for (let i = 0; i < CURRENT_PHOTOS.length; i++) {
      const photo = CURRENT_PHOTOS[i];
      const tier = pickTier();
      const pos = tryPlace(placed, tier, field);
      if (!pos) continue; // skip if too crowded — but with 508 candidates
                          // the field will still comfortably fill.

      placed.push({ x: pos.x, y: pos.y, size: pos.size });

      const el = document.createElement('button');
      el.type = 'button';
      el.className = `floating-photo floating-photo--${tier}`;
      el.style.left = `${pos.x}px`;
      el.style.top = `${pos.y}px`;
      // Randomize animation duration + delay so they don't move in unison
      const dur = rand(
        tier === 'lg' ? 26 : tier === 'md' ? 18 : 12,
        tier === 'lg' ? 40 : tier === 'md' ? 28 : 18
      );
      const delay = rand(-8, 0);
      el.style.setProperty('--dur', `${dur}s`);
      el.style.animationDelay = `${delay}s`;
      el.setAttribute('aria-label', `Photograph: ${photo.title} — ${photo.meta}`);
      el.dataset.index = String(i);

      const img = document.createElement('img');
      img.src = `images/${photo.id}_sq.jpg`;
      img.alt = `${photo.title} — ${photo.meta}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      el.appendChild(img);

      field.appendChild(el);
    }
  }

  /* -------------------------------------------------------------------------
     6. Detail card interactions
     ------------------------------------------------------------------------- */
  function bindDetailCard() {
    const card = document.getElementById('detail-card');
    const closeBtn = document.getElementById('detail-close');
    const field = document.getElementById('floating-field');
    if (!card || !closeBtn || !field) return;

    const fields = {
      title:    document.getElementById('detail-title'),
      subtitle: document.getElementById('detail-subtitle'),
      meta:     document.getElementById('detail-meta'),
      tag:      document.getElementById('detail-tag'),
      desc:     document.getElementById('detail-desc'),
      descJa:   document.getElementById('detail-desc-ja'),
      credit:   document.getElementById('detail-credit'),
    };

    let activeEl = null;
    let hoverTimer = null;
    let pinned = false; // clicked = pinned; hover cannot change while pinned

    function open(photo, el, isPinned) {
      if (activeEl && activeEl !== el) activeEl.classList.remove('floating-photo--active');
      activeEl = el;
      el.classList.add('floating-photo--active');

      fields.title.textContent    = photo.title;
      fields.subtitle.textContent = photo.subtitle;
      fields.meta.textContent     = photo.meta;
      fields.tag.textContent      = photo.tag;
      fields.desc.textContent     = photo.desc;
      fields.descJa.textContent   = photo.descJa;
      fields.credit.textContent   = photo.credit;

      card.setAttribute('aria-hidden', 'false');
      if (isPinned) pinned = true;
    }

    function close() {
      if (activeEl) activeEl.classList.remove('floating-photo--active');
      activeEl = null;
      pinned = false;
      card.setAttribute('aria-hidden', 'true');
    }

    function photoFromEl(el) {
      const idx = Number(el.dataset.index);
      return CURRENT_PHOTOS[idx];
    }

    // ---- Click = pin the card (won't change on subsequent hovers) ----
    field.addEventListener('click', (e) => {
      const el = e.target.closest('.floating-photo');
      if (!el) return;
      const photo = photoFromEl(el);
      if (!photo) return;
      if (pinned && activeEl === el) {
        close();
        return;
      }
      open(photo, el, true);
    });

    // ---- Hover (600ms dwell) shows preview ----
    field.addEventListener('mouseover', (e) => {
      const el = e.target.closest('.floating-photo');
      if (!el) return;
      if (pinned) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        const photo = photoFromEl(el);
        if (!photo) return;
        open(photo, el, false);
      }, 600);
    });

    field.addEventListener('mouseout', (e) => {
      const el = e.target.closest('.floating-photo');
      if (!el) return;
      clearTimeout(hoverTimer);
    });

    // ---- Close button ----
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      close();
    });

    // ---- Click outside card & outside photos = close ----
    document.addEventListener('click', (e) => {
      if (card.getAttribute('aria-hidden') !== 'false') return;
      if (card.contains(e.target)) return;
      if (e.target.closest('.floating-photo')) return;
      close();
    });

    // ---- Esc to close ----
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* -------------------------------------------------------------------------
     7. Smooth anchor scroll
     ------------------------------------------------------------------------- */
  function bindSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* -------------------------------------------------------------------------
     8. Contact-form guard — warn if action still has a placeholder
        (form now routes to zarunekodori@gmail.com via FormSubmit)
     ------------------------------------------------------------------------- */
  function bindContactGuard() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      const action = form.getAttribute('action') || '';
      if (action.includes('YOUR_FORM_ID') || action.includes('YOUR_EMAIL')) {
        e.preventDefault();
        alert(
          'コンタクトフォームの宛先が未設定です。\n' +
          'index.html の <form action="..."> を確認してください。'
        );
      }
    });
  }

  /* -------------------------------------------------------------------------
     9. Rebuild field on resize (debounced)
     ------------------------------------------------------------------------- */
  function bindResizeRebuild() {
    let t;
    window.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(buildField, 250);
    });
  }

  /* -------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------- */
  function boot() {
    buildField();
    bindDetailCard();
    bindSmoothScroll();
    bindContactGuard();
    bindResizeRebuild();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
